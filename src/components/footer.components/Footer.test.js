import { render } from '@testing-library/react';
import Footer from './Footer';

test('Footer renders', () => {
  const {getByTestId} = render(<Footer/>);
  const linkElement = getByTestId('footer');
  expect(linkElement).toBeTruthy();
});
