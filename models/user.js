const SALT = 'i want candy';
const sha256 = require('js-sha256');

module.exports = function(dbPoolInstance) {

    let createAccount = async function(firstname, lastname,email, password) {
        try {
            const hashedPassword = sha256(password + SALT);

            const sqlQuery = `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;

            const values = [firstname, lastname, email,hashedPassword];

            await dbPoolInstance.query(sqlQuery, values);
            return true;

        } catch(error) {
            console.log('createAccount model: ' + error);
            return false;
        }
    };

  return {
    createAccount
  };
};