/*
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 */

const pg = require('pg');
const url = require('url');
var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };
} else {
  configs = {
    user: 'elisu',
    host: '127.0.0.1',
    database: 'minute',
    port: 5432
  };
}

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/*
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 */
// const register = require('./models/register');
// const registerObj = register(pool);

// const login = require('./models/login');
// const loginObj = login(pool);
/*
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 */

// module.exports = {
//     pool:pool,

//     //add all app models below
//     register: registerObj,
//     login: loginObj,

//     //each key is now representing an object (based on the model) and we can call the functions written in that object using key.method.
// };