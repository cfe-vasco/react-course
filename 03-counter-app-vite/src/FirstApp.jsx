// const user = {
//   name: 'Christopher Vasco',
//   age: 22,
// }

// const getPass = (edad) => {
//   return (edad >= 18) ? 'Puedes entrar a la discoteca' : 'Eres menor de edad'
// }

// export const FirstApp = () => {
//   return (
//     <>
//       <h1>Bienvenido</h1>
//       <p>{getPass(19)}</p>
//       {/* <code>JSON.stringify{user}</code> */}
//     </>
//   );
// };

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>Hola {name}</h1>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: 'Christopher Vasco',
  title: 'No hay titulo',
  // subTitle: 'No hay subtitulo',
}