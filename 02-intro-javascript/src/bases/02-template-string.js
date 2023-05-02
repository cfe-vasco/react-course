const name = 'Christopher';
const lastName= 'Vasco';

// const fullName= name + ' ' + lastName;
const fullName = `${name} ${lastName}`;

console.log(fullName);

function getSaludo(name){
    return 'Hola ' + name;
}

console.log(`Este es un texto: ${getSaludo(fullName)}`);