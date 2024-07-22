import React, { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import './App.css'; // Import the CSS file

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/weather`, {
        params: { city }
      });
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="input"
      />
      <button onClick={fetchWeather} className="button">Get Weather</button>
      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;
