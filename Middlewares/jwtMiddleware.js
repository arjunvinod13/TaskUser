const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    console.log("Inside JWT middleware - router-level middleware")

    const token = req.headers['authorization']?.slice(7);
    console.log("Token:", token);

    try {
        const tokenVerification = jwt.verify(token, 'superkey2024')
        console.log("Token verification result:", tokenVerification)

        req.payload = tokenVerification.userId;

        next();
    } 
    catch (err) {
        console.error("JWT verification error:", err)
        res.status(401).json("Authorization failed. Please login again.")
    }
};

module.exports = jwtMiddleware;