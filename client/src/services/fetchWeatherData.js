const API_URL = 'http://localhost:4000/api/weather';

const fetchWeatherData = async (latitude, longitude) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ latitude, longitude })
        });
        if (!response.ok) {
            throw new Error('Unable to fetch weather data. Please try again later.');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Unable to fetch weather data. Please try again later.');
    }
};

export default fetchWeatherData;
