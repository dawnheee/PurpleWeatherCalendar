import axios from 'axios';
import { WeatherInfo } from '../../types';

async function getCurrent(): Promise<WeatherInfo> {
  let nowTemp = 0;
  let realFeelTemp = '';
  let iconNum = 0;
  let describe = '';

  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${process.env.REACT_APP_WEATHER_CITY_KEY}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&language=ko-kr&details=true`,
    );
    nowTemp = response.data[0].Temperature.Metric.Value;
    realFeelTemp = response.data[0].RealFeelTemperature.Metric.Value;
    iconNum = response.data[0].WeatherIcon;
    describe = response.data[0].WeatherText;
  } catch (error) {
    console.error(error);
  }
  return { nowTemp, realFeelTemp, iconNum, describe };
}
export default getCurrent;
