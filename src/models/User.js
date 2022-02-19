const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('User', UserSchema);