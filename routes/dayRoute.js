const express = require('express');
const controller = require('../controllers/controller');
const client = require('../db.js').client;
const router = express.Router();

router.get('/days', controller.getAllDays);
router.get('/days/:id', controller.getDayById);
router.post('/days', controller.createDay);
router.put('/days/:id', controller.updateDayById);
router.delete('/days/:id', controller.deleteDayById);

module.exports = router;