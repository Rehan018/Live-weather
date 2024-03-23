const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const weatherRoutes = require('./src/routes/weatherRoutes');
const websocketController = require('./src/controllers/websocketController');
const errorHandlers =require('./src/utils/errorHandlers')

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/', weatherRoutes);
websocketController.init(server);
app.use(errorHandlers);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;