const bcrypt = require('bcrypt');
const saltRounds = 10;
const stats = require('../index');

//compares user input password to database password
const dcrypter = (userPass, dbPass) => {
    // checks if the password from the database matches what was entered. bcrypt.compare('userInputPass', 'databasePass')
    bcrypt.compare(userPass, dbPass, (err, result) =>{
        return result
    })
}


module.exports = {dcrypter}