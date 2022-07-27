import React from 'react';
import iconNames from '../../icons';
import PropTypes from 'prop-types';

export const Icon = ({
  name,
  color,
  secondaryColor,
  height,
  width,
  ...rest
}) => {
  const SvgIcon = iconNames[name];
  return (
    <SvgIcon
      color={color}
      secondaryColor={secondaryColor}
      height={height}
      width={width}
      {...rest}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};
