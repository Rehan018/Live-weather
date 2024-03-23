const { getWeather } = require('../../../src/controllers/weatherController');

describe('Weather Controller', () => {
    describe('getWeather', () => {
        it('should return weather data for valid coordinates', async () => {

            const req = { body: { latitude: 40.7128, longitude: -74.0060 } };
            const res = { json: jest.fn() };

            await getWeather(req, res);

       
            expect(res.json).toHaveBeenCalled();
      
        });
    });
});
