import React from 'react';
import WeatherCard from 'components/weather/WeatherCard';
import Clothes from 'components/weather/Clothes';
import useWeather from 'components/weather/utils/useWeather';
import { WeatherInfo } from '../types';

function Weather() {
  const weatherInfo: WeatherInfo | null = useWeather();

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Weather
      <WeatherCard {...weatherInfo} />
      <Clothes {...weatherInfo} />
      {/* <WeatherIcon name="day-sleet-storm" /> */}
    </div>
  );
}

export default Weather;
