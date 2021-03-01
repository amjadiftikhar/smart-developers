import React from 'react';
import { render } from '@testing-library/react';
import Services from './Services';

test('Services renders', () => {
  const {getByTestId} = render(<Services/>);
  const servicesComponent = getByTestId('services');
  expect(servicesComponent).toBeInTheDocument()
})