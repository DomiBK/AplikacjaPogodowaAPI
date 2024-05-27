import React from 'react';

function Weather({ data }) {
  const { main, weather, wind } = data;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="border p-4 rounded max-w-md mx-auto">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <div className="flex items-center">
        <img src={iconUrl} alt="Weather icon" />
        <div className="ml-4">
          <p className="text-xl capitalize">{weather[0].description}</p>
          <p className="text-2xl">{main.temp}°C</p>
        </div>
      </div>
      <div className="mt-2">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default Weather;