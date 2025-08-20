const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createBooking = async (req, res, next) => {
    try {
        // Overview
        // Step 1 Destrutoring req.body
        // Step 2 Delete Booking
        // Step 3 Find Camping
        // Step 4 Calculate Total
        // Step 5 Insert to db
        // Step 6 Send id booking to react

        // 1. Object Destructuring เป็นการ “ดึง” คีย์ที่ต้องการออกมาจาก req.body แล้วเก็บไว้ในตัวแปรชื่อเดียวกัน
        const { campingId, checkIn, checkOut } = req.body;
        const { id } = req.user;
        console.log("campingId:", campingId, "checkIn:", checkIn, "checkOut:", checkOut, "id:", id);
        // Step 2 Delete Booking
        await prisma.booking.deleteMany({
            where: {
                profileId: id,
                paymentStatus: false,
            },
        });
        // Step 3 Find Camping
        const camping = await prisma.landmark.findFirst({
            where: {
                id: campingId,
            },
            select: {
                price: true,
            },
        });
        if (!camping) {
            return renderError(400, "Camping Not found");
        }

        // Step 4 Calculate Total
        const { total, totalNights } = calTotal(checkIn, checkOut, camping.price);
        // console.log(total, totalNights);
        // Step 5 Insert to db
        const booking = await prisma.booking.create({
            data: {
                profileId: id,
                landmarkId: campingId,
                checkIn: checkIn,
                checkOut: checkOut,
                total: total,
                totalNights: totalNights,
            },
        });
        console.log(booking);
        const bookingId = booking.id;
        console.log("Booking ID:", bookingId);
        // Step 6 Send id booking to react

        res.json({ message: "Booking Success!!", result: bookingId });
    } catch (error) {
        next(error);
    }
};

exports.checkout = async (req, res, next) => {
    try {
        const { id } = req.body;
        //1. find booking
        const booking = await prisma.booking.findFirst({
            where: { id: Number(id) },
            include: {
                landmark: {
                    select: {
                        id: true,
                        secure_url: true,
                        title: true,
                    }
                }
            }
        });

        if (!booking) {
            return renderError(res, 404, 'Booking not found');
        }

        const { total, totalNights, checkIn, checkOut, landmark } = booking;
        const { secure_url, title } = landmark;

        // 2 Stripe payment
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: 'thb',
                        product_data: {
                            name: title,
                            images: [secure_url],
                            description: 'Camping Booking'
                        },
                        unit_amount: total * 100
                    }
                },
            ],
            mode: 'payment',
            return_url: `http://localhost:5173/user/complete/{CHECKOUT_SESSION_ID}`,
        });

        res.send({ clientSecret: session.client_secret });

    } catch (error) {
        next(error);
    }
}
