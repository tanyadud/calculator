import React, { useState } from 'react';
import Display from '../display';
import BoxButtons from '../buttons';
import { CalculatorStyle } from './calculatorStyle';

const Calculator = () => {
  const [data, setData] = useState('');
  const [memory, setMemory] = useState(0);

  const handleButtonClick = (value) => {

    if (value === 'm+') {
      setMemory(memory + Number(data));
      return setData('');
    }
    if (value === 'm-') {
      setMemory(memory - Number(data));
      return setData('');
    }

    if (value === 'mc') {
      return setMemory(0);
    }

    if (value === 'mr') {
      return setData(String(memory));
    }

    if (value === 'AC') {
      return setData('');
    }

    if (!isNaN(value)) {
      return setData(String(data) + value);
    }

    if (isNaN(value) && isNaN(data[data.length - 1])) {
      return;
    }

    if (value === '=') {
      return setData(String(eval(data)));
    }

    if (value === '+' || value === '-' || value === '*' || value === '/') {
      return setData(data + value);
    }

    if (value === '%') {
      return setData(data / 100);
    }

    if (value === '+/-' && data[0] !== '-') {
      return setData('-' + data);
    }

    if (value === '+/-' && data[0] === '-') {
      return setData(data.slice(1));
    }
  };

  return (
    <CalculatorStyle>
      <Display value={data} />
      <BoxButtons onButtonClick={handleButtonClick} />
    </CalculatorStyle>
  );
};
export default Calculator;
