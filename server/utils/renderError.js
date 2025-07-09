const renderError = (code, message) => {
    const error = new Error(message); // Create a new Error object with the provided message
    error.statusCode = code; // Assign the status code to the error object

    throw error; // Throw the error to be caught by the error handling middleware
}

module.exports = renderError; // Export the renderError function for use in other modules