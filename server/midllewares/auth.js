exports.authCheck = (req, res, next) => {
    try {
        console.log('Auth check middleware');
        if (true) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
};