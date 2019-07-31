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

    return {
        homeRequestHandler,
        registerRequestHandler
    };
}