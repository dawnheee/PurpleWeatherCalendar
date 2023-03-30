import styled from '@emotion/styled';
import { WeatherInfo } from '../../types';
import useClothes from './utils/useClothes';

function Clothes(props: WeatherInfo) {
  const { nowTemp } = props;

  const recommendation = useClothes(nowTemp);

  return (
    <>
      <div>지금 날씨에는... </div>
      <br />
      <Recommandation>{recommendation}</Recommandation>
    </>
  );
}

export default Clothes;

const Recommandation = styled('div')`
  max-width: 180px;
`;
