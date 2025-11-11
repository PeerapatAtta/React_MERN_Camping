const prisma = require("../config/prisma");
const { findCenter } = require("../utils/findCenter");

exports.listCamping = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log("User ID:", id);
        const campings = await prisma.landmark.findMany({
            include: {
                favorites: {
                    where: { profileId: id },
                    select: { id: true }
                }
            }
        });
        // console.log(campings);
        const campingWithLike = campings.map((item) => {
            // console.log(item.favorites);
            return {
                ...item,
                isFavorite: item.favorites.length > 0
            }
        })

        const center = findCenter(campingWithLike);
        
        res.json({ result: campingWithLike, center: center });
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

// Favorite
exports.actionFavorite = async (req, res, next) => {
    try {
        const { campingId, isFavorite } = req.body;
        const { id } = req.user;

        let result
        if (isFavorite) {
            result = await prisma.favorite.deleteMany({
                where: {
                    profileId: id,
                    landmarkId: campingId
                }
            });
        } else {
            result = await prisma.favorite.create({
                data: {
                    profileId: id,
                    landmarkId: campingId
                }
            });
        }
        res.json({ message: isFavorite ? "Remove from favorite" : "Add to favorite", result });
    } catch (error) {
        next(error);
    }
}

exports.listFavorites = async (req, res, next) => {
    try {
        // console.log(req.user);
        // res.json("List of favorite camping");
        const { id } = req.user;
        const favorites = await prisma.favorite.findMany({
            where: {
                profileId: id
            },
            include: {
                landmark: true
            }
        });

        const favoriteWithLike = favorites.map((item) => {
            return {
                ...item,
                landmark: {
                    ...item.landmark,
                    isFavorite: true
                }
            }
        });

        res.json({ message: "List of favorite camping", result: favoriteWithLike });
    } catch (error) {
        next(error);
    }
}

exports.filterCamping = async (req, res, next) => {
    try {
        const { category, search } = req.query;
        const filter = [];

        if (category) {
            filter.push({ category: category });
        }
        if (search) {
            filter.push({ title: { contains: search } });
        }

        const result = await prisma.landmark.findMany({
            where: {
                OR: filter
            },
            include: {
                favorites: {
                    select: { id: true }
                }
            }
        });

        const campingWithLike = result.map((item) => ({
            ...item,
            isFavorite: item.favorites.length > 0,
        }));

        // console.log(campingWithLike);

        const center = findCenter(campingWithLike);
        // console.log("Center:", center);

        res.json({ result: campingWithLike, center: center });

    } catch (error) {
        next(error);
    }
}
