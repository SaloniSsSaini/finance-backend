const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  action: String,
  recordId: mongoose.Schema.Types.ObjectId,
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AuditLog', auditSchema);