const socketio = require('socket.io');
const { fetchWeatherData } = require('../services/weatherService');

let io;

function init(server) {
    io = socketio(server);
    io.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('updateCoordinates', async (coordinates) => {
            try {
                const { latitude, longitude } = coordinates;
                const weatherData = await fetchWeatherData(latitude, longitude);
                io.emit('weatherUpdate', weatherData);
            } catch (error) {
                console.error('Error sending weather updates:', error.message);
            }
        });
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
}

module.exports = {
    init
};
