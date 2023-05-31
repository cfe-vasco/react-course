export const usContext = ({ uid, name, age, range}) => {
  // console.log( nombre, edad, rango );

  return {
    uid: uid,
    name: name,
    age: age,
    range: range,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};
