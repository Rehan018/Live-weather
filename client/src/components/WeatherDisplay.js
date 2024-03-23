import React from 'react';

function WeatherDisplay({ data }) {
  const { location, temperature, conditions } = data;

  return (
    <div className="weather-display">
      <h2>{location}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
