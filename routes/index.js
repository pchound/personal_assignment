const routes = require('express').Router();
const day = require('./dayRoute');
const auth = require('../middleware/swaggerAuth'); 

routes.use('/', require('./swaggerRoutes'));
routes.use('/days', auth, day);
routes.use('/login', require('./auth'));

module.exports = routes;