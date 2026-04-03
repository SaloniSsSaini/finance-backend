const dashboardService = require('../services/dashboardService');

exports.getSummary = async (req, res) => {
  try {
    const data = await dashboardService.getSummary(req.user.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoryBreakdown = async (req, res) => {
  try {
    const data = await dashboardService.getCategoryBreakdown(req.user.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMonthlyTrends = async (req, res) => {
  try {
    const data = await dashboardService.getMonthlyTrends(req.user.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};