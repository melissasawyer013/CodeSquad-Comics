const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

// ADMIN ROUTES
router.route('/')
  .get(adminController.admin);

router.route('/create-book')
  .get(adminController.create)

router.route('/update-book/:id')
  .get(adminController.update);

module.exports = router;