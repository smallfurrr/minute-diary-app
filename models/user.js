const SALT = 'i want candy';
const sha256 = require('js-sha256');

module.exports = function(dbPoolInstance) {

    let createAccount = async function(firstname, lastname,email, password) {
        try {
            const hashedPassword = sha256(password + SALT);

            const sqlQuery = `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;

            const values = [firstname, lastname, email, hashedPassword];

            await dbPoolInstance.query(sqlQuery, values);
            return true;

        } catch(error) {
            console.log('createAccount model: ' + error);
            return false;
        }
    };

    let authenticateLogin = async function(email, password) {

        try {
            const hashedPassword = sha256(password + SALT);

            const sqlQuery = `SELECT id, first_name FROM users WHERE email= $1 AND password= $2`;

            const values = [email, hashedPassword];

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;
        } catch(error) {
            console.log('authenticate model: ' + error);
        }
    };

    let checkCookies = async function(cookies) {

        const sqlQuery = `SELECT id, first_name FROM users WHERE id= $1 AND first_name= $2`;

        const values = [cookies['id'], cookies['name']];

        let result = await dbPoolInstance.query(sqlQuery, values);

        return result.rows;
    };

  return {
    createAccount,
    authenticateLogin,
    checkCookies
  };
};