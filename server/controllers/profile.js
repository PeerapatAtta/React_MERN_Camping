const renderError = require('../utils/renderError'); // Import the renderError utility function
const prisma = require('../config/prisma');

exports.createProfile = async (req, res, next) => {
    try {
        const { firstname, lastname } = req.body;
        const { id } = req.user;
        const email = req.user.emailAddresses[0].emailAddress;
        console.log('Request user:', req.user);
        console.log('Received data:', { firstname, lastname });

        const profile = await prisma.profile.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                clerkId: id,
                email: email
            }
        });

        res.json({ message: 'Profile created successfully' });
    } catch (error) {
        console.log(error.message);
        next(error); // Pass the error to the error handling middleware
    }
}

