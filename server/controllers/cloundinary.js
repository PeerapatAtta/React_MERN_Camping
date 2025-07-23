exports.createImages = async (req, res, next) => {
    try {
        console.log(req.body.image);
        res.json({ message: 'Image uploaded successfully' });
    } catch (error) {
        next(error);
    }
}