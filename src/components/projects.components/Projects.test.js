import React from 'react';
import { render } from '@testing-library/react';
import Projects from './Projects';

test('Projects renders', () => {
  const {getByTestId} = render(<Projects/>);
  const projectsComponent = getByTestId('projectId');
  expect(projectsComponent).toBeInTheDocument();
})