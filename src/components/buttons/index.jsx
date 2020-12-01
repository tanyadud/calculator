import React from 'react';
import { BoxButtons, ButtonsStyle } from './ButtonsStyle';
import buttonsList from '../../common/data/buttonList';
import PropTypes from 'prop-types';

const Buttons = (props) => (
  <BoxButtons>
    {buttonsList.map((el) => (
      <ButtonsStyle
        key={el.value}
        style={{
          background: el.color,
          width: el.width,
          borderRadius: el.shape === 'round' ? '50%' : 30,
        }}
        onClick={() => props.onButtonClick(el.value)}
      >
        {el.label}
      </ButtonsStyle>
    ))}
  </BoxButtons>
);

Buttons.propTypes = {
  onButtonClick: PropTypes.func,
};

export default Buttons;
