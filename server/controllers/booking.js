const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");

exports.createBooking = async (req, res, next) => {
    try {
        const { checkIn, checkOut, campingId } = req.body;
        const { id } = req.user;

        await prisma.booking.deleteMany({
            where: {
                profileId: id,
                paymentStatus: false
            }
        });

        const camping = await prisma.landmark.findFirst({
            where: {
                id: campingId
            },
            select: {
                price: true
            }
        });

        if (!camping) {
            return renderError(res, 404, 'Camping not found');
        }

        const { total, totalNights } = calTotal(checkIn, checkOut, camping.price);
        
        const booking = await prisma.booking.create({
            data: {
                profileId: id,
                landmarkId: campingId,
                checkIn: checkIn,
                checkOut: checkOut,
                total: total,
                totalNights: totalNights
            }
        });
        console.log(booking);

        res.json({
            message: 'Create Booking Success!',
            result: { total, totalNights }
        });

    } catch (error) {
        next(error);
    }
}



