module.exports = (req, res, next) => {
    console.log(req.method, res.statusCode, req.hostname, req.path, Date.now());
    next();
}