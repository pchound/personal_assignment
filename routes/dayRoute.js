const express = require('express');
const controller = require('../controllers/controller');
const client = require('../db.js').client;
const router = express.Router();

/*router.get('/day', controller.getAllday);
router.get('/day/:id', controller.getContactById);*/
router.post('/days', controller.createDay);
/*router.put('/day/:id', controller.updateContactById);
router.delete('/day/:id', controller.deleteContactById);*/

module.exports = router;