module.exports = function (app, allModels) {
    const userController = require('./controllers/user')(allModels);

    app.get('/', userController.homeRequestHandler);
    app.get('/home', userController.homeRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);

    app.post('/user', userController.authenticateLoginHandler);
};