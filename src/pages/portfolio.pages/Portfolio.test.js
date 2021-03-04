import React from 'react';
import { render } from '@testing-library/react';
import Portfolio from './Portfolio';

test('Portfolio renders', () => {
  const {getByTestId} = render(<Portfolio/>);
  const portfolioComponent = getByTestId('portfolioId');
  expect(portfolioComponent).toBeInTheDocument();
})