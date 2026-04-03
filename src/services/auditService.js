const AuditLog = require('../models/AuditLog');

exports.logAction = async (userId, action, recordId) => {
  await AuditLog.create({
    userId,
    action,
    recordId
  });
};