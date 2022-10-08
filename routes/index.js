const routes = require('express').Router();
const day = require('./dayRoute');

routes.use('/', require('./swaggerRoutes'));
routes.use('/days', day);
routes.use('/login', require('./auth'));

module.exports = routes;