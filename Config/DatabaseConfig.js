const { mongoose } = require('mongoose');
const {MongoClient} = require('mongodb');
const Logins = require('../Models/Schema');
require('dotenv').config();



const connection = async () => {
    console.log("test")
    mongoose.connect(process.env.API_KEY)
    .then((result) => console.log())
    .catch((err) => console.log(err));

    Logins.find()
    .then((results) => {
        console.log(results)
    })
    .catch((err) => {
        console.log(err)
    });
}

const hi = () => {
    console.log('hi')
}
module.exports = {connection, hi};