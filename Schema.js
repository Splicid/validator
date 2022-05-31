const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }
})

const logins =  mongoose.model('logins', userSchema);
module.exports = logins;