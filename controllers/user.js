const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');

module.exports = function(db) {

    let homeRequestHandler = async function(request, response) {
        try {
            //async part can come in later when you check if they're already logged in or not - if they are then bring them straight to user page instead
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
            } else {
                response.render('pages/error');
            }
        } catch (error) {
            console.log('user controller ' + error);
        }
    };

    let authenticateLoginHandler = async function(request, response) {
        try {
            let result = await db.user.authenticateLogin(request.body.email, request.body.password);

            if (result.length === 1) {

                let hashed = sha256(result[0].id.toString());
                response.cookie('name', result[0].first_name);
                response.cookie('id', result[0].id);
                response.cookie('loggedIn', hashed);

                const cookieData = {
                    name: result[0].first_name,
                    id: parseInt(result[0].id)
                };

                response.render('pages/user', cookieData);
            } else {
                response.render('pages/error');
            }
        } catch (error) {
            console.log('authenticate login controller' + error);
        }
    };

    //for app.get(/user), check if they have existing cookies
    let authenticateUserHandler = async function(request, response) {
        try {
            let result = await db.user.checkCookies(request.cookies);

            if (result.length === 1) {

                const data = {
                    name: result[0].first_name,
                    id: result[0].id,
                };

                response.render('pages/user', data);
            } else {
                response.render('pages/error');
            }
        } catch (error) {
            console.log('authenticate user controller' + error);
        }
    };

    let logoutRequestHandler = function(request, response) {
        //no checking for current cookies just LOG OUTTTT for now
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
        authenticateUserHandler,
        logoutRequestHandler
    };
}