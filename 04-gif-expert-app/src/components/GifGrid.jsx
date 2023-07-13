import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []); //La dependencia vacía [] asegura que el efecto se ejecute solo una vez al cargar el componente

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {
          images.map(({id, title}) => (
            <li key={id}>{title}</li>
          ))
        }
      </ol>
    </>
  );
};
