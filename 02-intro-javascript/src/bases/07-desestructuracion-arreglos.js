const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ , , ch3] = characters; 

console.log(ch3);


const returnArray = () =>{
    return ['ABC', 123]
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);

//Tarea
//1. primer valor de arreglo se llamara nombre
// 2. se llamara setNombre

const usseState = (value) => {
    return[value, ()=> {console.log('Hola mundo')}];
}

const [name, setName] = usseState('Goku');

console.log(name);

setName();