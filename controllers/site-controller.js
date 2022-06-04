const Comic = require('../models/comicSchema');
const User = require('../models/userSchema');
const passport = require('passport');

module.exports = {
  index: (request, response) => {
    Comic.find({}, (err, comics) => {
      if(err) {
        return err;
      } else {
        response.render('pages/index', {comics: comics});
      }
    })
  },
  // initiate authentication with oauth
  google_uri: passport.authenticate('google', { 
    scope: ['openid', 'profile', 'email']
  }),
  google_redirect_uri: [
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(request, response) {
      response.redirect('/admin-console');
    }
  ],
  about: (request, response) => {
    response.render('pages/about');
  },
  login_get: (request, response) => {
    response.render('pages/login');
  },
  login_post: (request, response) => {
    const user = new User({
      username: request.body.username,
      password: request.body.password
    });
  
    request.login(user, (error) => {
      if (error) {
        console.log(error);
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin-console');
        });
      }
    });
  },
  register_get: (request, response) => {
    response.render('pages/register')
  },
  register_post: (request, response) => {
    User.register({username: request.body.username}, request.body.password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register')
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin-console');
        })
      }
    })
  },
  logout_get: (request, response) => {
    request.logout();
    response.redirect('/');
  }
}