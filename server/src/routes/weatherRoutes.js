const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.post('/api/weather', weatherController.getWeather);

module.exports = router;
