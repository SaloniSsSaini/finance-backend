const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

const {
  getSummary,
  getCategoryBreakdown,
  getMonthlyTrends
} = require('../controllers/dashboardController');

// Summary
router.get('/summary', auth, authorize('read'), getSummary);

// Category breakdown
router.get('/categories', auth, authorize('read'), getCategoryBreakdown);

// Monthly trends
router.get('/trends', auth, authorize('read'), getMonthlyTrends);

module.exports = router;