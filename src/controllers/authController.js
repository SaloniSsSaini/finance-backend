const authService = require('../services/authService');
const { success, error } = require('../responses/responseHandler');
const { registerSchema, loginSchema } = require('../validators/authValidator');

exports.register = async (req, res) => {
  try {
    const { error: validationError } = registerSchema.validate(req.body);
    if (validationError) {
      return error(res, validationError.details[0].message, 400);
    }

    const result = await authService.registerUser(req.body);
    return success(res, result, "User registered successfully");

  } catch (err) {
    return error(res, err.message, 400);
  }
};

exports.login = async (req, res) => {
  try {
    const { error: validationError } = loginSchema.validate(req.body);
    if (validationError) {
      return error(res, validationError.details[0].message, 400);
    }

    const result = await authService.loginUser(req.body);
    return success(res, result, "Login successful");

  } catch (err) {
    return error(res, err.message, 400);
  }
};