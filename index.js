const http = require('http');
const Logins = require('./Models/Schema');
const express = require('express');
const { Console } = require('console');
const app = express();
const db = require('./Config/DatabaseConfig')
require('dotenv').config();
absolutePath = __dirname + "/index.html";
app.use(express.urlencoded({extended: true}));


app.listen(3000, () => console.log('Running on port 3000.'));

//checking if login credentials are correct
const main = async (test) => {
    //db.compareUser('testaccount', 'password')
    let data = await db.compareUser('testaccount', 'password');
    console.log(data)
}
main()
//db.compareUser('testaccount', 'password');

app.get('/', (res, req) => {
    req.sendFile(absolutePath)
})

const successful_login = (status) => {
    console.log('login exectued')
}


module.exports = {successful_login};


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
