import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe regresar un objeto', () => {
    const uid = 'Super Soldado'
    const name = 'Steve Rogers';
    const age = 200
    const range = 'Capitan'

    const user = usContext({uid, name, age, range});

    expect(user).toEqual({
      uid: uid,
      name: name,
      age: age,
      range: range,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });

    console.log(user);
  });
});
