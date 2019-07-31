module.exports = function(db) {

    let homeRequestHandler = async function(request, response) {
        try {
            //async part comes in later when you check if they're already logged in or not
            response.render('pages/home');
        }
        catch(e) {
            console.log('user controller ' + e);
        }
    };

    return {
        homeRequestHandler,
    };
}