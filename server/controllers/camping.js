const prisma = require("../config/prisma");

exports.listCamping = (req, res) => {
    try {
        res.json('Camping route is working!:');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.readCamping = (req, res) => {
    try {
        const { id } = req.params;
        res.json(`Camping GET with ID: ${id}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.createCamping = async (req, res) => {
    try {
        const { title, description, price, category, lat, lng } = req.body;
        const { id } = req.user;

        const camping = await prisma.landmark.create({
            data: {
                title: title,
                description: description,
                price: price,
                category: category,
                lat: lat,
                lng: lng,
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