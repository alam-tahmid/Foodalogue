const favorites = require('../controllers/favoriteController');

module.exports = (app)=> {

    // save a new favorite
    app.post('/favorites', favorites.save);

    // Retrieve the favories
    app.post('/allFavorites/', favorites.findAll);

    // Retrieve a single favorite resturant
    app.post('/favorites/findFav', favorites.findOne);


    // Delete a Note with resurantId
    app.post('/favorites/deleteFav', favorites.delete);
}