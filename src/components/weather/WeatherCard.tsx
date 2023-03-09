import React from 'react';
import getCurrent from 'apis/weather/getCurrent';
import getMaxMin from 'apis/weather/getMaxMin';

function WeatherCard() {
  getCurrent();
  getMaxMin();
  return <div>Weather Card</div>;
}

export default WeatherCard;
