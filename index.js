const http = require('http');
const Logins = require('./Models/Schema');
const express = require('express');
const { Console } = require('console');
const app = express();
const db = require('./Config/DatabaseConfig')
require('dotenv').config();
absolutePath = __dirname + "/static/index.html";
absolutePath2 = __dirname + "/static/complete.html";
app.use(express.urlencoded({extended: true}));


app.listen(3000, () => console.log('Running on port 3000.'));

//checking if login credentials are correct
const mainSubmit = async (user, pass) => {
    try{
        let data = await db.compareUser(user, pass);
        if(data === true){
            return true
        }
    }catch(err){
        return false;
    }
}

app.get('/', (res, req) => {
    req.sendFile(absolutePath)
})

app.use(('/'), express.static('static/styles'));

app.post('/', async (res, req) => {
    const user = res.body.username;
    const pass = res.body.pass;
    const accountStat = await mainSubmit(user, pass);
    if(accountStat){
        req.sendFile(absolutePath2);
    } else{
        req.send('Did not find account')
    }

})

// Starting the account creation 
// const testuser = new Login({
//     username: 'luis1abreu1233',
//     password: 'password123'
// });

// testuser.save(function(err) {
//      if (err) throw err;
// });




const successful_login = (status) => {
    console.log('login exectued')
}
module.exports = {successful_login};
