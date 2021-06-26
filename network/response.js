success = ( req, res, message, status) => {
    res.status(status || 200).send({
        "error": "",
        "message": message
    });
}

error = (req, res, message, status, detail) => {
    console.log('[error response]: ' + detail)
    res.status(status || 500).send({
        "error": message,
        "message": ""
    });
}

module.exports = {
    success,
    error
}
