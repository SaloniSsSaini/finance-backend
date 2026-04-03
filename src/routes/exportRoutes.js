const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const { exportCSV } = require('../services/exportService');

router.get('/csv', auth, async (req, res) => {
  const data = await exportCSV(req.user.id);
  res.header('Content-Type', 'text/csv');
  res.attachment('data.csv');
  return res.send(data);
});

module.exports = router;