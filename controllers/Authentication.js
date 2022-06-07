const bcrypt = require('bcrypt');
const saltRounds = 10;
const stats = require('../index');

//compares user input password to database password
const dcrypter = async (userPass, dbPass) => {
    // checks if the password from the database matches what was entered. bcrypt.compare('userInputPass', 'databasePass')
    const match = await bcrypt.compare(userPass, dbPass);
    return match
}

module.exports = {dcrypter}