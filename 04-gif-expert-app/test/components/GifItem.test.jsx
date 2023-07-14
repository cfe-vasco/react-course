import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {
    
  const title = 'Saitama';
  const url = 'https://hola.com';

  test('Debe hacer match con el snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
