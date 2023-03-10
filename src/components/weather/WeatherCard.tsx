import { WeatherInfo } from '../../types';
import Icon from './Icon';

function WeatherCard(props: WeatherInfo) {
  const { nowTemp, realFeelTemp, iconNum, describe, maxTemp, minTemp } = props;
  // WeatherInfo 인터페이스의 속성들을 직접 사용할 수 있습니다.

  return (
    <div>
      <p>현재 온도: {nowTemp}</p>
      <p>체감 온도: {realFeelTemp}</p>
      <p>아이콘 번호: {iconNum}</p>
      <p>날씨 설명: {describe}</p>
      <p>최고 온도: {maxTemp}</p>
      <p>최저 온도: {minTemp}</p>
      <Icon iconNum={iconNum} />
    </div>
  );
}

export default WeatherCard;
