function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function esperarSumar(num1, num2) {
  console.log('Comenzando ejecucion');
  // Espera un segundo aquí...
  await esperar(2000);
  console.log('Espera 2 segundos...');
  // Devuelve la suma de los dos números aquí...
  return num1 + num2;
}
// Llama a la función esperarSumar aquí y muestra el resultado en la consola
esperarSumar(2, 3).then((resp) => {
  console.log('Tu respuesta es: ', resp);
});

function esperarTexto(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function esperarInvertir(saludo) {
  console.log('Comenzando ejecucion');
  await esperarTexto(2000);
  console.log('Espera 2 segundos...');
  await esperarTexto(2000);
  return saludo;
}

esperarInvertir('Hola mundo').then((resp) => {
  console.log(resp);
});

const mensajeRecibido = async (mensaje) => {
  console.log('Este es un mensaje: ');
  return mensaje;
};

const getMessage = async () => {
  const respuesta = await mensajeRecibido('hola mundo');
  return respuesta;
};

getMessage().then((resp) => {
  console.log(resp);
});
