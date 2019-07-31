const sha256 = require('js-sha256');

module.exports = function(db) {

    let homeRequestHandler = async function(request, response) {
        try {
            //async part comes in later when you check if they're already logged in or not
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
                // response.redirect('pages/user');
                response.send("registration sucessful!")
            } else {
                response.send('Registration not successful');
            }
        } catch(error) {
            console.log('user controller ' + error);
        }
    };

    return {
        homeRequestHandler,
        registerRequestHandler,
        createAccountRequestHandler
    };
}