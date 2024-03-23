const axios = require('axios');
const { OPENWEATHERMAP_API_KEY } = require('../../config/config');

async function fetchWeatherData(latitude, longitude) {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY}`);
        return {
            temperature: response.data.main.temp,
            conditions: response.data.weather[0].description
            // Add more weather data as needed
        };
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
}

module.exports = {
    fetchWeatherData
};
