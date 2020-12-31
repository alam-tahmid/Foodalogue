const User = require('../models/User');
const utils = require('../utils/tools');

exports.findUser = async (req, res) => {
    try {
        let plain_pass = req.body.user_password
        let hash_pass = utils.hashing(plain_pass)
        const user = await User.find({
            user_name: req.body.user_name,
            user_password: hash_pass
        }, (err, result) => {
            if (result.length === 0 || err) {
                res.json({
                    message: err
                })
            } else {
                res.json(result)
            }

        });
    } catch (err) {
        res.json({
            message: err
        });
    }
};

exports.save = async (req, res) => {

    const newUser = new User(req.body);

    try {
        const checkUser = await User.find({
            user_name: req.body.user_name
        });
        if (checkUser.length === 0) {

            let plain_pass = newUser["user_password"]
            let hash_pass = utils.hashing(plain_pass)
            newUser["user_password"] = hash_pass
            const savedUser = await newUser.save();

            res.json(savedUser);
        } else {
            res.json({
                message: err
            })
        }


    } catch (err) {
        res.json({
            message: err
        });
    }
};