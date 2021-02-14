import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {queryByText} = render(<App />);
  const linkElement = queryByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
