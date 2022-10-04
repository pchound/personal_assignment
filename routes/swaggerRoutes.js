const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/json');
router.use('/workout-docs', swaggerUi.serve);
router.get('/workout-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;