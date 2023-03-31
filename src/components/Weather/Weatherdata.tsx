import Icon from 'components/Weather/Icon';
import styled from '@emotion/styled';
import { WeatherInfo } from '../../types';

function Weatherdata(props: WeatherInfo) {
  const { nowTemp, realFeelTemp, iconNum, describe, maxTemp, minTemp } = props;

  return (
    <WeatherCardContainer>
      <Icon iconNum={iconNum} />
      <p className="now">{nowTemp}</p>
      <p className="describe">{describe}</p>

      <Tempature>
        <p className="real temp">체감 {realFeelTemp} °C</p>
        <p className="min temp">최저 {minTemp} °C</p>
        <p className="max temp">최고 {maxTemp} °C</p>
      </Tempature>
    </WeatherCardContainer>
  );
}

export default Weatherdata;

const WeatherCardContainer = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60%;
  .now {
    font-size: 45px;
    position: relative;
    margin-top: 10px;
  }
  .describe {
    margin-top: -20px;
    font-size: 25px;
  }
  .temp {
    font-size: 20px;
  }
`;

const Tempature = styled('section')``;
