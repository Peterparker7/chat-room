 const jwt = require('jsonwebtoken');

 const generateToken = () => jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "30d" });

 module.exports = generateToken;