const { mongoose } = require('mongoose');
const {MongoClient} = require('mongodb');
const Logins = require('../Models/Schema');
const dcrypters = require('../controllers/Authentication');
require('dotenv').config();

const connection = async () => {
    mongoose.connect(process.env.API_KEY)
    // .then((result) => console.log())
    // .catch((err) => console.log(err));
}

const compareUser = async (user, userPass) => {
    // Checks if user is in the database.
    connection();
    Logins.findOne({username: user}).select('password')

}


// compareUser()
//     .then((result) =>{
//         console.log(result);
//     })
module.exports = {connection, compareUser};