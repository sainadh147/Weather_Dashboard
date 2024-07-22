import React from 'react';
import './Weather.css'; // Import the CSS file

function Weather({ data }) {
  return (
    <div className="weatherContainer">
      <h2 className="weatherHeader">Weather in {data.name}</h2>
      <p className="weatherDetail">Temperature: {(data.main.temp - 273.15).toFixed(2)} °C</p>
      <p className="weatherDetail">Weather: {data.weather[0].description}</p>
      <p className="weatherDetail">Humidity: {data.main.humidity}%</p>
      <p className="weatherDetail">Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
