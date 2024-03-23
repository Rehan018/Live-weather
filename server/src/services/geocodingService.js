const axios = require('axios');
const { OPENWEATHERMAP_API_KEY } = require('../../config/config');

async function getLocationName(latitude, longitude) {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY}`);
        return response.data[0].name;
    } catch (error) {
        throw new Error('Error fetching location name');
    }
}

module.exports = {
    getLocationName
};
