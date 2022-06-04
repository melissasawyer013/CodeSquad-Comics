const Comic = require('../models/comicSchema');

module.exports = {
  new: (request, response) => {
    const newComic = new Comic({ 
      title: request.body.title, 
      author: request.body.author, 
      publisher: request.body.publisher, 
      genre: request.body.genre, 
      pages: request.body.pages, 
      rating: request.body.rating, 
      synopsis: request.body.synopsis, 
      image: request.body.image
    });

    newComic.save();
    response.redirect(`/admin-console`);
  },
  book: (request, response) => {
    const { id } = request.params;
    Comic.findOne({_id: id}, (err, foundBook) => {
      if(err){
        return err;
      } else {
        response.render('pages/book', {foundBook : foundBook});
      }
    })
  },
  edit: (request, response) => {
    const { id } = request.params;
    Comic.findByIdAndUpdate(id, { $set: { title: request.body.title, author: request.body.author, publisher: request.body.publisher, genre: request.body.genre, pages: request.body.pages, rating: request.body.rating, synopsis: request.body.synopsis, image: request.body.image}}, { new: true }, err => {
      if (err) {
       return err
      } else {
        response.redirect('/admin-console');
      }
    })
  },
  delete: (request, response) => {
    const { id } = request.params;
    Comic.deleteOne({_id: id}, (err) => {
      if(err){
        return err;
      } else{
        response.redirect('/admin-console');
      }
    })
  }
}