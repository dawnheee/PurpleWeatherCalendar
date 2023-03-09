import axios from 'axios';

async function getMaxMin(): Promise<void> {
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/223650?apikey=a94snV6PFLOH7p26aNJtVSYsA0zmje5r&language=ko-kr&metric=true`,
    );
    console.log(
      '일최고 기온:',
      response.data.DailyForecasts[0].Temperature.Maximum.Value,
    );
    console.log(
      '일최저 기온:',
      response.data.DailyForecasts[0].Temperature.Minimum.Value,
    );
  } catch (error) {
    console.error(error);
  }
}
export default getMaxMin;
