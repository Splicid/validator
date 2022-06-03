const { mongoose } = require('mongoose');
const {MongoClient} = require('mongodb');
require('dotenv').config();



const connection = async () => {
    console.log("test")
    mongoose.connect(process.env.API_KEY)
    .then((result) => console.log(process.env.API_KEY))
    .catch((err) => console.log(err));
}

const hi = () => {
    console.log('hi')
}
module.exports = {connection, hi};