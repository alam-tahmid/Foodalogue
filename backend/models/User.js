const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({

    user_name: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_first_name: {
        type: String,
        required: true
    },
    user_last_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_created: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('User', UserSchema);