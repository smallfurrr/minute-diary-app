module.exports = function (app, allModels) {
    const userController = require('./controllers/user')(allModels);

    app.get('/home', userController.homeRequestHandler);
};