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

exports.createCamping = (req, res) => {
    try {
        const { title, price, description } = req.body;
        console.log(`Title: ${title}, Price: ${price}, Description: ${description}`);
        res.json('Create Camping Success!');
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