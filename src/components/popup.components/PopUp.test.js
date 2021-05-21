import React from 'react';
import { render } from '@testing-library/react';
import PopUp from './PopUp';

test('PopUpInner renders', () => {
  const {queryByText} = render(<PopUp/>);
  const linkElement = queryByText('popup');
  expect(linkElement).toBeNull();
});