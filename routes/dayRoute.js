const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();
//const authorize = require('../controllers/controller');

/*router.get('/', authorize, controller.getAllDays);
router.get('/:id', authorize, controller.getDayById);
router.post('/', authorize, controller.createDay);
router.put('/:id', authorize, controller.updateDayById);
router.delete('/:id', authorize, controller.deleteDayById);*/
//router.get('/login', controller.login);


router.get('/', controller.getAllDays);
router.get('/:id', controller.getDayById);
router.post('/', controller.createDay);
router.put('/:id', controller.updateDayById);
router.delete('/:id', controller.deleteDayById);

module.exports = router;