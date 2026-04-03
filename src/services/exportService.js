const Record = require('../models/Record');

exports.exportCSV = async (userId) => {
  const records = await Record.find({ userId, isDeleted: false });

  let csv = "amount,type,category,date\n";

  records.forEach(r => {
    csv += `${r.amount},${r.type},${r.category},${r.date}\n`;
  });

  return csv;
};