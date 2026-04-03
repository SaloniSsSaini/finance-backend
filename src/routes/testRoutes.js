const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

// Only admin can create
router.get('/admin-only', auth, authorize('create'), (req, res) => {
  res.json({ message: "Admin access granted" });
});

// All roles can read
router.get('/read', auth, authorize('read'), (req, res) => {
  res.json({ message: "Read access granted" });
});

module.exports = router;