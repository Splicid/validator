const http = require('http');
const bcrypt = require('bcrypt');
const {MongoClient} = require('mongodb');
const saltRounds = 10;
const Logins = require('./Schema');
const { mongoose } = require('mongoose');
const express = require('express');
const { Console } = require('console');
const app = express();
require('dotenv').config();

console.log();

const namer = 'helloworld123';
bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(namer, salt, (err, hash) =>{
        console.log(hash)
    })
})

bcrypt.compare('password', process.env.API_KEY, (err, result) =>{
    console.log(result)
})

const URL = "mongodb+srv://splicid:Splangle890()@Cluster0.d4hrn.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(URL)
    .then((result) =>  app.listen(3000))
    .catch((err) => console.log(err));

app.get('/insert', (req, res) => {
    const logins = new Logins({
        username: 'computermaem32',
        password: '$2b$10$u9QCQ/A8tRKSThNwyMqPFOBmiEkeZTHgbATCi4S0A.iqs8phJDVoW',
    })
    logins.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})
app.get('/find', (req, res) => {
    Logins.find()
    .then((results) => {
        res.send(results)
    })
    .catch((err) => {
        console.log(err)
    });
})


// const main = async () =>{
//     const URL = "mongodb+srv://splicid:Splangle890()@cluster0.d4hrn.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(URL);
//     try {
//         await client.connect();
//         const login = new Logins({
//             username: "flappyBird",
//             password: "$2b$10$pn70vzS7/LXmRHmX9zPo3OSTcwq/XeJ0XRrLXV0JYMXo6dIWVBvwy"
//         });
//         login.save();
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log("Execution Completed")
//     }
//     // console.log(await client.db.Cluster0.find());
// }

// main().catch(console.error);

