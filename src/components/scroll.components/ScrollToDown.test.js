import React from 'react';
import { render } from '@testing-library/react';
import ScrollToDown from './ScrollToDown';

test('ScrollToDown renders', () => {
  const {getByTestId} = render(<ScrollToDown/>);
  const linkElement = getByTestId('scrollToDown');
  expect(linkElement).toBeTruthy()
})