import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
  // test('Debe de hacer match con snapshot', () => {

  //     const subTitle = 'Esto es un subtitulo desde tests'
  //     const {container} = render(<FirstApp subTitle={subTitle}/>)

  //     expect(container).toMatchSnapshot()

  // })

  test('Debe de mostrar el titulo en h1', () => {
    const subTitle = 'Esto es un subtitulo desde tests 2';
    const { container, getByText, getByTestId } = render(
      <FirstApp subTitle={subTitle} />
    );
    expect(getByText(subTitle)).toBeTruthy();

    // const h1 = container.querySelector('p')
    // expect(h1.innerHTML).toContain(subTitle)

    expect(getByTestId('test-subtitle').innerHTML).toContain(subTitle);
  });

  test('Debe mostrar el titulo enviado por props', () => {
    const subTitle = 'Esto es un subtitulo desde tests 2';
    const title = 'Soy un titulo';
    const { getAllByText } = render(
        <FirstApp 
            title={title} 
            subTitle={subTitle} 
        />
    );
    expect(getAllByText(title).length).toBe(2);
  });
});
