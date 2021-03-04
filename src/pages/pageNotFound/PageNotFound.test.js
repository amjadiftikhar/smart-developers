import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

test('PageNotFound renders', () => {
  const {getByTestId} = render(<PageNotFound/>);
  const contactFormComponent = getByTestId('pageNotFoundId');
  expect(contactFormComponent).toBeInTheDocument();
})