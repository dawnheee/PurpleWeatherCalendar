import React, { useEffect, useState } from 'react';
import getCurrent from 'apis/weather/getCurrent';
import getMaxMin from 'apis/weather/getMaxMin';
import { WeatherInfo } from 'types';

function useWeather() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  async function getWeather(): Promise<void> {
    const current = await getCurrent();
    const maxMin = await getMaxMin();
    setWeatherInfo({ ...current, ...maxMin });
  }

  useEffect(() => {
    getWeather();
  }, []);

  return weatherInfo;
}

export default useWeather;
