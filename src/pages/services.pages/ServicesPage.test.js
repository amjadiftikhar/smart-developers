import React from 'react';
import { render } from '@testing-library/react';
import ServicesPage from './ServicesPage';

test('ServicesPage renders', () => {
  const {getByTestId} = render(<ServicesPage/>);
  const servicesPageComponent = getByTestId('servicesPageId');
  expect(servicesPageComponent).toBeInTheDocument();
})