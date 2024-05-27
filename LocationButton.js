import React from 'react';

function LocationButton({ getWeatherByLocation }) {
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={getWeatherByLocation}
        className="bg-green-500 text-white p-2 rounded"
      >
        Use My Location
      </button>
    </div>
  );
}

export default LocationButton;