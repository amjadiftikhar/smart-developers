import React from 'react';
import { render } from '@testing-library/react';
import Tools from './Tools';

test('Tools renders', () => {
  const {getByTestId} = render(<Tools/>);
  const toolsComponent = getByTestId('tools');
  expect(toolsComponent).toBeInTheDocument()
})