exports.createProfile = (req, res) => {
    try {
        const { name, age, bio } = req.body;
        console.log(`Name: ${name}, Age: ${age}, Bio: ${bio}`);
        res.json('Profile created successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.listProfile = (req, res) => {
    try {
        res.json('Profile route is working!');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.readProfile = (req, res) => {
    try {
        const { id } = req.params;
        res.json(`Profile GET with ID: ${id}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.updateProfile = (req, res) => {
    try {
        const { id } = req.params;
        res.json(`Profile PUT with ID: ${id}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

exports.deleteProfile = (req, res) => {
    try {
        const { id } = req.params;
        res.json(`Profile DELETE with ID: ${id}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}