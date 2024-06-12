const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  // Get token from request headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token is missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Attach userId to request object
    next(); // Proceed to next middleware
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = jwtMiddleware;
