const Record = require('../models/Record');
const mongoose = require('mongoose');

exports.getSummary = async (userId) => {
  const data = await Record.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        isDeleted: false
      }
    },
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" }
      }
    }
  ]);

  let income = 0;
  let expense = 0;

  data.forEach(item => {
    if (item._id === "income") income = item.total;
    if (item._id === "expense") expense = item.total;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense
  };
};

exports.getCategoryBreakdown = async (userId) => {
  return await Record.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        isDeleted: false
      }
    },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    },
    {
      $sort: { total: -1 }
    }
  ]);
};

exports.getMonthlyTrends = async (userId) => {
  return await Record.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        isDeleted: false
      }
    },
    {
      $group: {
        _id: {
          month: { $month: "$date" },
          year: { $year: "$date" }
        },
        total: { $sum: "$amount" }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 }
    }
  ]);
};