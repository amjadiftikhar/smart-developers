import React from 'react';
import { render } from '@testing-library/react';
import ProfileCard from './ProfileCard';

test('ProfileCard renders', () => {
  const {getByTestId} = render(<ProfileCard/>);
  const profileCardComponent = getByTestId('profileCardId');
  expect(profileCardComponent).toBeInTheDocument();
})