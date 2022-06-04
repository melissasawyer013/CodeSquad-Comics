const Comic = require('../models/comicSchema');

module.exports = {
  admin: (request, response) => {

    if (request.isAuthenticated()) {
      Comic.find({}, (error, comics) => {
        if(error) {
          return error;
        } else {
          response.render('pages/admin', {comics: comics, user:request.user});
        }
      })
    } else {
      response.redirect('/login')
    }
  },
  create: (request, response) => {
    if (request.isAuthenticated()) {
      response.render('pages/create');
    } else {
      response.redirect('/login')
    }
    
  },
  update: (request, response) => {
    if (request.isAuthenticated()) {
      const { id } = request.params;
      Comic.findOne({_id: id}, (error, foundBook) => {
        if(error){
          return error;
        } else {
          response.render('pages/update', {foundBook: foundBook});
        }
      })  
    } else {
      response.redirect('/login')
    }
  }
}