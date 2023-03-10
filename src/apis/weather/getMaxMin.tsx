import axios from 'axios';
import { WeatherInfo } from '../../types';

async function getMaxMin(): Promise<WeatherInfo> {
  let maxTemp = 0;
  let minTemp = 0;
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/223650?apikey=a94snV6PFLOH7p26aNJtVSYsA0zmje5r&language=ko-kr&metric=true`,
    );
    maxTemp = response.data.DailyForecasts[0].Temperature.Maximum.Value;
    minTemp = response.data.DailyForecasts[0].Temperature.Minimum.Value;
  } catch (error) {
    console.error(error);
  }

  return { maxTemp, minTemp };
}
export default getMaxMin;
