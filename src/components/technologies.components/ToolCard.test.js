import React from 'react';
import { render } from '@testing-library/react';
import ToolCard from './ToolCard';

test('ToolCard renders', () => {
  const {getByTestId} = render(<ToolCard/>);
  const toolCardComponent = getByTestId('toolCard');
  expect(toolCardComponent).toBeInTheDocument()
})