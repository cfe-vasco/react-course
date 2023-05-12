import { getHeroeById } from './bases/08-import-export';

// const promise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promise.then((heroe)=>{
//     console.log('Tu heroe es: ', heroe);
// })
// .catch(err => console.error(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el heroe');
      }
    }, 2000);
  });
};

getHeroeByIdAsync(5)
//   .then((heroe) => console.log('Tu heroe es:', heroe))
  .then(console.log)
  .catch(console.error);
