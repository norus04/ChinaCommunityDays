import React, { useEffect, useState } from 'react';

const TopBanner = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=44.4282&longitude=-69.5377&current=temperature_2m&timezone=America%2FNew_York&forecast_days=1&temperature_unit=fahrenheit`)
      .then(res => res.json())
      .then(data => {
        if (data && data.current && typeof data.current.temperature_2m === 'number') {
          setWeather(Math.round(data.current.temperature_2m));
        }
      });
  }, []);

  return (
    <div className="top-banner">
      <div className="banner-left"></div>
      <div className="banner-center">See you August 1 - 3, 2025 at China Community Days!</div>
      <div className="weather-widget">
        {weather !== null ? `${weather}°F` : '...'}
      </div>
    </div>
  );
};

export default TopBanner; 