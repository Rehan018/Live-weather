const { fetchWeatherData } = require('../services/weatherService');
const { getLocationName } = require('../services/geocodingService');

async function getWeather(req, res) {
    const { latitude, longitude } = req.body;

    try {
        const location = await getLocationName(latitude, longitude);
        const weatherData = await fetchWeatherData(latitude, longitude);
        console.log('Location:', location);
        console.log('Weather Data:', weatherData);
        
        res.json({ location, ...weatherData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getWeather
};
