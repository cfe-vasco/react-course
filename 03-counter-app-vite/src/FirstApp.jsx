// const user = {
//   name: 'Christopher Vasco',
//   age: 22,
// }

const getPass = (edad) => {
  return (edad >= 18) ? 'Puedes entrar a la discoteca' : 'Eres menor de edad'
}

export const FirstApp = () => {
  return (
    <>
      <h1>Bienvenido</h1>
      <p>{getPass(19)}</p>
      {/* <code>JSON.stringify{user}</code> */}
    </>
  );
};