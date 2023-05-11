// const saludar = function (name){
//     return `Hola, soy ${name}`;
// }

const saludar2 = (name) => {
  return `Hola, soy ${name}`;
};

const saludar3 = (name) => `Hola, soy ${name}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

const getUser = () => ({
  uid: 'ABC123',
  username: 'Crislml654',
});

console.log(getUser());


//TAREA 

//1. transformar a una funcion de flecha
//2. tien que retornar un objeto implicito

// function getUserActive(name){
//     return {
//         uid: 'ABC123',
//         username: name
//     }
// };

// const userActive = getUserActive('Christopher');
// console.log(userActive);

const getUserActive = (name) => ({
    uid: 'ABC123',
    username: name,
});

const userActive = getUserActive('Christopher Vasco');
console.log(userActive);