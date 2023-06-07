import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const add = () => {
    setCounter(counter + 1); // ===> Toma el valor del counter y lo aumenta en 1
    // setCounter ( (c) => c + 1 ) ===> esto es una funcion que regresa el nuevo valor del counter
  };

  const remove = () => setCounter(counter - 1)

  const reset = () => setCounter (value)

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+1</button>
      <button onClick={remove}>-1</button>
      <button aria-label='btn-reset' onClick={reset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
