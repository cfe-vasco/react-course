import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {

    // const newCategory = 'Valorant'
    // if(categories.includes(newCategory)){
    //     console.log('Esta categoria ya existe');
    // } else {
    //     setCategories([...categories, newCategory])
    // }

    // setCategories(newCategory => [...newCategory, 'Valorant'])

    if(categories.includes(newCategory)) return

    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory = {onAddCategory}
      />

      {/* Listado de Gifs */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* Gif Item */}
    </>
  );
};
