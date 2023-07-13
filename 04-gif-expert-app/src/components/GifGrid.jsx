import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

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

      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem 
              key={image.id} 
              {...image}
            />
          ))
        }
      </div>
    </>
  );
};
