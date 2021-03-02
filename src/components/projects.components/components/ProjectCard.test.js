import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('ProjectCard renders', () => {
  const {getByTestId} = render(<ProjectCard/>);
  const projectCardComponent = getByTestId('projectCard');
  expect(projectCardComponent).toBeInTheDocument();
})