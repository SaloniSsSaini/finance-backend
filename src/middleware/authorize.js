const permissions = require('../utils/permissions');

const authorize = (action) => {
  return (req, res, next) => {
    try {
      const userRole = req.user.role;

      if (!permissions[userRole]) {
        return res.status(403).json({ message: "Invalid role" });
      }

      if (!permissions[userRole].includes(action)) {
        return res.status(403).json({
          message: `Access denied for ${action}`
        });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports = authorize;