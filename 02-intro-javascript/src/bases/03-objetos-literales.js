const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'Quito',
    zip: 451654765,
    lat: 14.3232,
    lng: 34.95959,
  }
};

// console.table({person}); hace que el resultado se muestre en una tabla

const person2 = {...person};
person2.name = 'Peter';

console.log(person);
console.log(person2);