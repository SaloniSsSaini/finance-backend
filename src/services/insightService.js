const Record = require('../models/Record');

exports.getInsights = async (userId) => {
  const records = await Record.find({ userId, isDeleted: false });

  let totalExpense = 0;
  let categoryMap = {};

  records.forEach(r => {
    if (r.type === 'expense') {
      totalExpense += r.amount;
      categoryMap[r.category] =
        (categoryMap[r.category] || 0) + r.amount;
    }
  });

  const days = 30;
  const avg = totalExpense / days;
  const prediction = avg * 30;

  let topCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  return {
    prediction,
    insight: `You are spending most on ${topCategory}`
  };
};