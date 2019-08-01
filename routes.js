module.exports = function (app, allModels) {
    const userController = require('./controllers/user')(allModels);
    const entryController = require('./controllers/entry')(allModels);

    app.get('/', userController.homeRequestHandler);
    app.get('/home', userController.homeRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);

    app.get('/user', userController.authenticateUserHandler);
    app.post('/user', userController.authenticateLoginHandler);

    app.post('/entries', entryController.addEntryHandler);

    app.get('/logout', userController.logoutRequestHandler);
};