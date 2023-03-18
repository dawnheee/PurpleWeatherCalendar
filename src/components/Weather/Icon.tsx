import React from 'react';
import useIcons from './utils/useIcons';

function Icon(props: { iconNum: number | undefined }) {
  const { iconNum } = props;
  const className = useIcons(iconNum);

  return (
    <i
      className={`wi wi-${className}`}
      style={{ color: '#7A8EF1', fontSize: 90 }}
    />
  );
}

export default Icon;
