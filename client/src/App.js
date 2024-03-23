import React, { useState, useEffect, useCallback } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import LocationInput from './components/LocationInput';
import ErrorMessage from './components/ErrorMessage';
import fetchWeatherData from './services/fetchWeatherData'; 

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async (latitude, longitude) => { 
    try {
      const response = await fetchWeatherData(latitude, longitude);
      setWeatherData(response);
      setError(null);
    } catch (error) {
      setError('Unable to fetch weather data. Please try again later.');
    }
  };

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchData(latitude, longitude);
      }, () => {
        setError('Unable to retrieve your location.');
      });
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []); 

  useEffect(() => {
    getLocation();
  }, [getLocation]); 

  return (
    <div className="app">
      <h1>Live Weather App</h1>
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherDisplay data={weatherData} />}
      <LocationInput getLocation={getLocation} />
    </div>
  );
}

export default App;
