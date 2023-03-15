import WeatherCard from 'components/Weather/WeatherCard';
import Clothes from 'components/Weather/Clothes';
import useWeather from 'components/Weather/utils/useWeather';
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
    </div>
  );
}

export default Weather;
