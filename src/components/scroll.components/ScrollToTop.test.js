import React from 'react';
import { render } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

test('ScrollToTop renders', () => {
  const {queryByText} = render(<ScrollToTop/>);
  const scrollToTopComponent = queryByText('scrollToTop');
  expect(scrollToTopComponent).not.toBeTruthy()
})