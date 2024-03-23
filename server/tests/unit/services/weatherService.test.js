const { fetchWeatherData } = require('../../../src/services/weatherService');

describe('Weather Service', () => {
    describe('fetchWeatherData', () => {
        it('should return weather data for valid coordinates', async () => {
            const latitude = 40.7128;
            const longitude = -74.0060;

          
            const weatherData = await fetchWeatherData(latitude, longitude);

          
            expect(weatherData).toHaveProperty('temperature');
            expect(weatherData).toHaveProperty('conditions');
           
        });
    });
});
