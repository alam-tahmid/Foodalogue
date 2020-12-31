//usercocde and authentication
module.exports = (app) => {
    const User = require('../controllers/userController');

    // save a new favorite
    app.post('/login', User.findUser)

    app.post('/signup', User.save)


}