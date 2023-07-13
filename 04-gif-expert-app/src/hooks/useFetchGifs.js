import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []); //La dependencia vacía [] asegura que el efecto se ejecute solo una vez al cargar el componente

  return {
    images,
    isLoading,
  };
};

