const http = require('http');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Logins = require('./Models/Schema');
const express = require('express');
const { Console } = require('console');
const app = express();
const db = require('./Config/DatabaseConfig')
require('dotenv').config();
absolutePath = __dirname + "/index.html";
app.use(express.urlencoded({extended: true}));


app.listen(3000, () => console.log('Example app is listening on port 3000.'));
console.log(db.connection())
app.get('/', (res, req) => {
    req.sendFile(absolutePath)
})



// pass = "hello"
// bcrypt.genSalt(saltRounds, (err, salt) => {
//     bcrypt.hash(pass, salt, (err, hash) =>{
//         console.log(hash)
//     })
// })

// bcrypt.compare('password', process.env.API_KEY, (err, result) =>{
//     console.log(result)
// })

// app.get("/", (req,res) => {
//     res.sendFile(absolutePath);
// })

// app.get('/find', (req, res) => {
//     Logins.find()
//     .then((results) => {
//         res.send(results)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// })
