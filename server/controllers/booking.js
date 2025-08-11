const prisma = require("../config/prisma");

exports.createBooking = async (req, res, next) => {
    try {
        const { checkIn, checkOut, campingId } = req.body;
        const { id } = req.user;

        const booking = await prisma.booking.create({
            data: {
                checkIn: checkIn,
                checkOut: checkOut,
                campingId: campingId,
                userId: id
            }
        });

        res.json({
            message: 'Create Booking Success!',
            result: booking
        });

    } catch (error) {
        next(error);
    }
}



