const recordService = require('../services/recordService');
const auditService = require('../services/auditService');
const { success, error } = require('../responses/responseHandler');
const { recordSchema } = require('../validators/recordValidator');

exports.createRecord = async (req, res) => {
  try {
    const { error: validationError } = recordSchema.validate(req.body);
    if (validationError) {
      return error(res, validationError.details[0].message, 400);
    }

    const record = await recordService.createRecord(req.body, req.user.id);

    await auditService.logAction(req.user.id, "CREATE", record._id);

    return success(res, record, "Record created");

  } catch (err) {
    return error(res, err.message);
  }
};

exports.getRecords = async (req, res) => {
  try {
    const data = await recordService.getRecords(req.query, req.user.id);
    return success(res, data);
  } catch (err) {
    return error(res, err.message);
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const updated = await recordService.updateRecord(
      req.params.id,
      req.body,
      req.user.id
    );

    if (!updated) {
      return error(res, "Record not found", 404);
    }

    await auditService.logAction(req.user.id, "UPDATE", updated._id);

    return success(res, updated, "Record updated");

  } catch (err) {
    return error(res, err.message);
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const deleted = await recordService.deleteRecord(
      req.params.id,
      req.user.id
    );

    if (!deleted) {
      return error(res, "Record not found", 404);
    }

    await auditService.logAction(req.user.id, "DELETE", deleted._id);

    return success(res, null, "Record deleted");

  } catch (err) {
    return error(res, err.message);
  }
};