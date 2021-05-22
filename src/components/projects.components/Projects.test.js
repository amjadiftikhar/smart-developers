import React from 'react';
import { render } from '@testing-library/react';
import Projects from './Projects';

test('Projects renders', () => {
  const {getByTestId} = render(<Projects/>);
  const projectComponent = getByTestId('projectId');
  expect(projectComponent).toBeInTheDocument();
});