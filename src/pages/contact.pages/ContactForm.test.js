import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('ContactForm renders', () => {
  const {getByTestId} = render(<ContactForm/>);
  const contactFormComponent = getByTestId('contactFormId');
  expect(contactFormComponent).toBeInTheDocument();
});