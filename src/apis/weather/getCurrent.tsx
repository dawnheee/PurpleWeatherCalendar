import axios from 'axios';

async function getCurrent(): Promise<void> {
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/223650?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&language=ko-kr&details=true`,
    );
    console.log(response.data[0]);

    console.log('현재온도:', response.data[0].Temperature.Metric.Value);
    console.log('체감온도:', response.data[0].RealFeelTemperature.Metric.Value);
    console.log('WeatherIcon:', response.data[0].WeatherIcon);
    console.log('텍스트:', response.data[0].WeatherText);
  } catch (error) {
    console.error(error);
  }
}
export default getCurrent;
