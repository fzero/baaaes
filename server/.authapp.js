const jwt = require('jsonwebtoken');
const User = require('./models/user.js');
const { JWT_SECRET } = process.env;

// Create and Sign Token
function signToken(user) {
  // toObject() returns a basic js object
  console.log("we're here");
  const userData = JSON.parse(user);
  console.log(userdata, 'userdata');
  delete userData.password;
  return jwt.sign(userData, JWT_SECRET);
}

// function for verifying tokens
function verifyToken(req, res, next) {
  // grab token from either headers, req.body, or query string
  const token = req.get('token') || req.body.token || req.query.token;
  // if no token present, deny access
  if (!token) return res.json({ success: false, message: 'No token provided' });
  // otherwise, try to verify token
  jwt.verify(token, JWT_SECRET, (err, decodedData) => {
    // if problem with token verification, deny access
    if (err) return res.json({ success: false, message: 'Invalid token.' });
    // otherwise, search for user by id that was embedded in token
    User.findById(decodedData._id, (err, user) => {
      // if no user, deny access
      if (!user) return res.json({ success: false, message: 'Invalid token.' });
      // otherwise, add user to req object
      req.user = user;
      // go on to process the route:
      next();
    });
  });
}

module.exports = {
  signToken,
  verifyToken
};
