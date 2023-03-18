import WeatherCard from 'components/Weather/WeatherCard';
import Clothes from 'components/Weather/Clothes';
import useWeather from 'components/Weather/utils/useWeather';
import { styled } from '@mui/material/styles';
import { WeatherInfo } from '../types';

function Weather() {
  const weatherInfo: WeatherInfo | null = useWeather();

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  return (
    <WeatherSection>
      <WeatherCard {...weatherInfo} />
      <Clothes {...weatherInfo} />
    </WeatherSection>
  );
}

export default Weather;

const WeatherSection = styled('div')({
  height: '650px',
  width: '15%',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.93)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
