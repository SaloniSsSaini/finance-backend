const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require('../controllers/recordController');

// CREATE
router.post('/', auth, authorize('create'), createRecord);

// READ
router.get('/', auth, authorize('read'), getRecords);

// UPDATE
router.put('/:id', auth, authorize('update'), updateRecord);

// DELETE
router.delete('/:id', auth, authorize('delete'), deleteRecord);

module.exports = router;