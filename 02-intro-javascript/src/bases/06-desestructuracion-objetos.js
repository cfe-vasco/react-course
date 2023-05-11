//Desestructuración
// Asignacion desestructurante

const person = {
    name: 'Tony',
    age: 45,
    key: 'IronMan'
};

// const {name, age, key} = person;

// console.log(name);
// console.log(age);
// console.log(password);

const usseContext = ({name, age, key, range = 'Capitan'}) =>{
    // console.log(name, age, range);

    return{
        keyName: key,
        anios: age,
        latlng:{
            lat: 12.156,
            lng: 15.123
        }
    }
}

const {keyName, anios, latlng:{lat, lng}} = usseContext(person);

console.log(keyName, anios);
console.log(lat, lng);