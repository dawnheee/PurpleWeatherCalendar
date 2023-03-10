import React from 'react';
import useIcons from './utils/useIcons';

function Icon(props: { iconNum: number | undefined }) {
  const { iconNum } = props;
  const className = useIcons(iconNum);

  return (
    <div>
      아이콘
      <div className="weather-icon">
        <i
          className={`wi wi-${className}`}
          style={{ color: 'red', fontSize: 50 }}
        />
        {className && <div>{className}</div>}
      </div>
    </div>
  );
}

export default Icon;
