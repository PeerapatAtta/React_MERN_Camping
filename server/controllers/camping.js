const prisma = require("../config/prisma");

exports.listCamping = async (req, res) => {
    try {
        const campings = await prisma.landmark.findMany();
        res.json({result: campings});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.readCamping = async (req, res) => {
    try {
        const { id } = req.params;
         const camping = await prisma.landmark.findUnique({
             where: {
                 id: parseInt(req.params.id)
             }
         });
        res.json({result: camping});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.createCamping = async (req, res) => {
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
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.updateCamping = (req, res) => {
    try {
        const { id } = req.params;
        res.json(`Camping PUT with ID: ${id}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.deleteCamping = (req, res) => {
    try {
        const { id } = req.params;
        res.json(`Camping DELETE with ID: ${id}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}