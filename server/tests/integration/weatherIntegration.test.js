const request = require('supertest');
const app = require('../../app');

describe('Weather Integration Tests', () => {
    it('should get weather data through the API', async () => {
        const res = await request(app)
            .post('/api/weather')
            .send({ latitude: 40.7128, longitude: -74.0060 });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('location');
        expect(res.body).toHaveProperty('temperature');
        expect(res.body).toHaveProperty('conditions');
      
    });
});
