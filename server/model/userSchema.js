const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({


    name  : {
        type : String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    }



})

const User = mongoose.model('USEREN', UserSchema);
module.exports = User;