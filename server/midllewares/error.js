exports.handleError = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res
        .status(err.statusCode || 500)
        .json({ message: err.message || 'Internal Server Error' }); // Respond with a 500 status code and error message
}