const prisma = require("../config/prisma");

exports.listStates = async (req, res, next) => {
    try {
        const usersCount = await prisma.profile.count();
        const campingsCount = await prisma.landmark.count();
        const bookingsCount = await prisma.booking.count({
            where: {
                paymentStatus: true
            }
        });
        res.json({
            usersCount: usersCount,
            campingsCount: campingsCount,
            bookingsCount: bookingsCount
        });
    } catch (error) {
        next(error);
    }
};

exports.listReservations = async (req, res, next) => {
    try {
        const { id } = req.user;

        const campings = await prisma.landmark.count({
            where: {
                profileId: id
            }
        });
        const totals = await prisma.booking.aggregate({
            where:{
                profileId: id
            },
            _sum: {
                totalNights: true,
                total: true
            }
        })

        res.json({
            campings: campings,
            nights: totals._sum.totalNights || 0,
            totals: totals._sum.total || 0
        });
    } catch (error) {
        next(error);
    }
};

