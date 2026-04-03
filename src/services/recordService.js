const Record = require('../models/Record');

exports.createRecord = async (data, userId) => {
  return await Record.create({ ...data, userId });
};

exports.getRecords = async (query, userId) => {
  const {
    type,
    category,
    min,
    max,
    page = 1,
    limit = 10
  } = query;

  const filter = {
    userId,
    isDeleted: false
  };

  if (type) filter.type = type;
  if (category) filter.category = category;
  if (min || max) {
    filter.amount = {};
    if (min) filter.amount.$gte = Number(min);
    if (max) filter.amount.$lte = Number(max);
  }

  const skip = (page - 1) * limit;

  const records = await Record.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(Number(limit));

  const total = await Record.countDocuments(filter);

  return {
    total,
    page: Number(page),
    records
  };
};

exports.updateRecord = async (id, data, userId) => {
  return await Record.findOneAndUpdate(
    { _id: id, userId, isDeleted: false },
    data,
    { new: true }
  );
};

exports.deleteRecord = async (id, userId) => {
  return await Record.findOneAndUpdate(
    { _id: id, userId },
    { isDeleted: true },
    { new: true }
  );
};