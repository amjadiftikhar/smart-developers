import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('Home renders', () => {
  const {getByTestId} = render(<Home/>);
  const homeComponent = getByTestId('homeId');
  expect(homeComponent).toBeInTheDocument();
});