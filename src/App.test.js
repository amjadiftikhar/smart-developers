import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {queryByText} = render(<App />);
  const linkElement = queryByText(/apps/i);
  expect(linkElement).toBeInTheDocument();
});
