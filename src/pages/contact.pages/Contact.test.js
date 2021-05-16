import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

test('Contact renders', () => {
  const {getByTestId} = render(<Contact/>);
  const contactComponent = getByTestId('contactId');
  expect(contactComponent).toBeInTheDocument();
});