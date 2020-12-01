import React from 'react';
import { DisplayBox } from './displayStyle';
import PropTypes from 'prop-types';

const Display = (props) => {
  return <DisplayBox>{props.value || 0}</DisplayBox>;
};

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Display;
