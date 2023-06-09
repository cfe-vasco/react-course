import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    // const newCategory = 'Valorant'

    // if(categories.includes(newCategory)){
    //     console.log('Esta categoria ya existe');
    // } else {
    //     setCategories([...categories, newCategory])
    // }

    // setCategories(newCategory => [...newCategory, 'Valorant'])

    setCategories([...categories, 'Valorant'])

  }
  console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gifs */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
