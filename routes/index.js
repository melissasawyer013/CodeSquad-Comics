const siteRouter = require('./site-routes');
const bookRouter = require('./book-routes');
const adminRouter = require('./admin-routes');

const router = require('express').Router();

router.use('/', siteRouter);
router.use('/books', bookRouter);
router.use('/admin-console', adminRouter);

module.exports = router;