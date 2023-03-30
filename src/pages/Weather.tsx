import Weatherdata from 'components/Weather/Weatherdata';
import Clothes from 'components/Weather/Clothes';
import useWeather from 'components/Weather/utils/useWeather';
import { styled } from '@mui/material/styles';
import { WeatherInfo } from '../types';

function Weather() {
  const weatherInfo: WeatherInfo | null = useWeather();

  return (
    <WeatherSection>
      <Weatherdata {...weatherInfo} />
      <Clothes {...weatherInfo} />
    </WeatherSection>
  );
}

export default Weather;

const WeatherSection = styled('div')({
  width: '15%',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.801)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
