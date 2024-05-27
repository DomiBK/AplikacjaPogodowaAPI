import React, { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Search from './components/Search';
import LocationButton from './components/LocationButton';
import './index.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherData = async (url) => {
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    }
  };

  const getWeatherByCity = (city) => {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetchWeatherData(url);
  };

  const getWeatherByLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = 'YOUR_API_KEY';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      fetchWeatherData(url);
    }, () => {
      setError('Geolocation not supported or permission denied.');
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Weather App</h1>
      <Search getWeatherByCity={getWeatherByCity} />
      <LocationButton getWeatherByLocation={getWeatherByLocation} />
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;