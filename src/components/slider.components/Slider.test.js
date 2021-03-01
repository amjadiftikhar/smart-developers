import React from 'react';
import { render } from '@testing-library/react';
import Slider from './Slider';

test('Slider renders', () => {
  const {getByTestId} = render(<Slider/>);
  const sliderComponent = getByTestId('slider');
  expect(sliderComponent).toBeInTheDocument()
})