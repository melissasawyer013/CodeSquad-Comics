const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

// SITE ROUTES
router.route('/')
  .get(siteController.index);

router.route('/auth/google')
  .get(siteController.google_uri);

router.route('/auth/google/comics')
  .get(siteController.google_redirect_uri);

router.route('/about')
  .get(siteController.about);

router.route('/login')
  .get(siteController.login_get)
  .post(siteController.login_post);

router.route('/register')
  .get(siteController.register_get)
  .post(siteController.register_post);

router.route('/logout')
  .get(siteController.logout_get)

module.exports = router;