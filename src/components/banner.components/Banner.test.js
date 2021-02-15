import React from 'react';
import {render} from '@testing-library/react';
import Banner from './Banner';

it('Banner renders', () => {
    const {getByTestId} = render(<Banner/>);
    const bannerComponent = getByTestId('banner');
    expect(bannerComponent).toBeTruthy();
})