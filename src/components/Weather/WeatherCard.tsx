import Icon from 'components/Weather/Icon';
import styled from '@emotion/styled';
import { WeatherInfo } from '../../types';

function WeatherCard(props: WeatherInfo) {
  const { nowTemp, realFeelTemp, iconNum, describe, maxTemp, minTemp } = props;

  return (
    <WeatherCardContainer>
      <Icon iconNum={iconNum} />
      <p className="now">{nowTemp}</p>
      <p className="describe">{describe}</p>

      <Tempature>
        <p className="real">체감 온도: {realFeelTemp}</p>
        <p className="min">최고 온도: {minTemp}</p>
        <p className="max">최저 온도: {maxTemp}</p>
      </Tempature>
    </WeatherCardContainer>
  );
}

export default WeatherCard;

const WeatherCardContainer = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60%;
  .now {
    font-size: 40px;
    position: relative;
    margin-top: 10px;
  }
  .describe {
    margin-top: -20px;
  }
`;

const Tempature = styled('section')``;
