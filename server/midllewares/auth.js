const { clerkClient } = require('@clerk/express'); // Importing Clerk client for authentication

exports.authCheck = async (req, res, next) => {
    try {
       const userId = req.auth?.userId; // Extracting user ID from request authentication
         if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' }); // If no user ID, return unauthorized
        }
        const user = await clerkClient.users.getUser(userId) // Fetching user details from Clerk
        req.user = user; // Attach user details to request
        next(); // Proceed to the next middleware
    } catch (error) {
        next(error); // Passing error to the next middleware
    }
};