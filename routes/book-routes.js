const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

// BOOK ROUTES
router.route('/')
  .post(bookController.new)

router.route('/:id')
  .get(bookController.book)
  .put(bookController.edit)
  .delete(bookController.delete)

module.exports = router;