const Favorite = require('../models/Favorite');

exports.findAll = async (req, res) => {
    console.log(req.body['user_id']);
    let id = req.body['user_id'];
    try {
        const favorites = await Favorite.find({
            user_id: id
        });
        res.json(favorites);
    } catch (err) {

        res.json({
            message: err
        });
    }
};

//Saves a favortie resturant
exports.save = async (req, res) => {

    const favorite = new Favorite(req.body);

    try {
        const savedPost = await favorite.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
};

exports.findOne = async (req, res) => {

    let user_id = req.body['user_id'];
    let restaurant_name = req.body['restaurant_name'];

    try {
        const result = await Favorite.find({
            $and: [{
                'user_id': user_id
            }, {
                'restaurant_name': restaurant_name
            }]
        });

        res.json(result);
    } catch (err) {
        res.json({
            message: err
        });
    }
};

exports.delete = async (req, res) => {

    let user_id = req.body['user_id'];
    let restaurant_name = req.body['restaurant_name'];

    try {
        const removedFavorite = await Favorite.deleteOne({
            $and: [{
                'user_id': user_id
            }, {
                'restaurant_name': restaurant_name
            }]
        });
        res.json(removedFavorite);
    } catch (err) {
        res.json({
            message: err
        });
    }

};