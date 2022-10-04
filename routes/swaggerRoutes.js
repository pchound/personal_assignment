const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/json');
router.use('/days', swaggerUi.serve);
router.get('/days', swaggerUi.setup(swaggerDocument));

module.exports = router;