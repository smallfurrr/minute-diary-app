const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');

module.exports = function(db) {

    let homeRequestHandler = async function(request, response) {
        try {
            //async part can come in later when you check if they're already logged in or not
            response.render('pages/home');
        } catch (error) {
            console.log('user controller ' + error);
        }
    };

    let registerRequestHandler = async function(request, response) {
        try {
            response.render('pages/register');
        } catch (error) {
            console.log('user controller ' + error);
        }
    };

    let createAccountRequestHandler = async function(request, response) {
        try {
            let successfulRegistration = await db.user.createAccount(request.body.first_name, request.body.last_name, request.body.email, request.body.password);

            if (successfulRegistration === true) {
                response.render('pages/login')
                // response.send("Registration Sucessful!")
            } else {
                response.send('Registration not successful');
            }
        } catch(error) {
            console.log('user controller ' + error);
        }
    };

    let authenticateLoginHandler = async function(request, response) {
        try {
            let result = await db.user.authenticateLogin(request.body.email, request.body.password);

            if (result.length === 1) {
                response.cookie('name', result[0].first_name);
                response.cookie('id', result[0].id);
                response.cookie('loggedIn', sha256(result[0].first_name));

                const cookieData = {
                    name: result[0].first_name,
                    id: result[0].id,
                    loggedIn: result[0].first_name
                };
                response.render('pages/user', cookieData);
            } else {
                response.send('Login was not successful.');
            }
        } catch(error) {
            console.log('user controller ' + error);
        }
    };

    //make async later
    let addEntryHandler = function(request, response) {
        console.log(request.body);
        response.send("Entry added!")
    }

    let logoutRequestHandler = function(request, response) {
    //no checking for current cookies just LOG OUTTTT
        response.clearCookie('name', request.cookies['name']);
        response.clearCookie('id', request.cookies['id']);
        response.clearCookie('loggedIn', request.cookies['loggedIn']);
        response.redirect('/home');
    };

    return {
        homeRequestHandler,
        registerRequestHandler,
        createAccountRequestHandler,
        authenticateLoginHandler,
        addEntryHandler,
        logoutRequestHandler
    };
}