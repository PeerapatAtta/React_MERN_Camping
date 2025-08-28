const prisma = require("../config/prisma");

exports.listCamping = async (req, res, next) => {
    try {
        const campings = await prisma.landmark.findMany({
            include: {
                favorites: {
                    where: { profileId: req.user?.id },
                    select: { id: true }
                }
            }
        });
        // console.log(campings);
        const campingWithLike = campings.map((item) => {
            console.log(item.favorites);
            return {
                ...item, 
                isFavorite: item.favorites.length > 0
            }
        })
        // console.log(campingWithLike);
        res.json({ result: campingWithLike });
    } catch (error) {
        next(error);
    }
}

exports.readCamping = async (req, res, next) => {
    try {
        const { id } = req.params;
        const camping = await prisma.landmark.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.json({ result: camping });
    } catch (error) {
        next(error);
    }
}

exports.createCamping = async (req, res, next) => {
    try {
        const { title, description, price, category, lat, lng, image } = req.body;
        const { id } = req.user;

        const camping = await prisma.landmark.create({
            data: {
                title: title,
                description: description,
                price: price,
                category: category,
                lat: lat,
                lng: lng,
                secure_url: image.secure_url,
                public_id: image.public_id,
                profileId: id
            }
        });

        res.json({
            message: 'Create Camping Success!',
            result: camping
        });

    } catch (error) {
        next(error);
    }
}

exports.updateCamping = (req, res, next) => {
    try {
        const { id } = req.params;
        res.json(`Camping PUT with ID: ${id}`);
    } catch (error) {
        next(error);
    }
}

exports.deleteCamping = (req, res, next) => {
    try {
        const { id } = req.params;
        res.json(`Camping DELETE with ID: ${id}`);
    } catch (error) {
        next(error);
    }
}