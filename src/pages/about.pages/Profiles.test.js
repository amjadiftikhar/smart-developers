import React from 'react';
import { render } from '@testing-library/react';
import Profiles from './Profiles';

test('Profiles renders', () => {
  const {getByTestId} = render(<Profiles/>);
  const profilesComponent = getByTestId('profilesId');
  expect(profilesComponent).toBeInTheDocument();
});