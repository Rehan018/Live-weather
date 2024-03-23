const errorHandler = require('../../../src/utils/errorHandlers');

describe('Error Handlers', () => {
    it('should handle errors and respond with status 500', () => {
        const err = new Error('Test error');
        const req = {};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const next = jest.fn();

        errorHandler(err, req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Something went wrong!' });
    });
});
