import React from 'react';
import PropTypes from 'prop-types';

interface WeatherIconProps {
  name: string;
  color?: string;
  size?: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ name, color, size }) => (
  <i className={`wi wi-${name}`} style={{ color, fontSize: size }} />
);

WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

WeatherIcon.defaultProps = {
  size: 50,
  color: 'orange',
};

export default WeatherIcon;
