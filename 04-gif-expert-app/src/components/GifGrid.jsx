import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {

    getGifs(category);

  }, [ ]); //La dependencia vacía [] asegura que el efecto se ejecute solo una vez al cargar el componente


  return (
    <>
      <h3>{category}</h3>

      <h5>{counter}</h5>

      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
