import { render } from '@testing-library/react';
import Layout from './Layout';

test('Layout renders', () => {
  const {getByTestId} = render(<Layout/>);
  const linkElement = getByTestId('layout');
  expect(linkElement).toBeTruthy();
});