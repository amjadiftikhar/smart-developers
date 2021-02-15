import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Banner from './Banner';

it('Banner renders', () => {
    const {getByTestId} = render(<Banner/>);
    const bannerComponent = getByTestId('banner');
    expect(bannerComponent).toBeTruthy();
})

describe('contact button test', () => {
    it('renders test', () => {
        const {getByTestId} = render(<Banner/>);
        const contactButton = getByTestId('contactBtn');
        expect(contactButton).toBeTruthy();
    })
    it('clicking redirects', () => {
        const {getByTestId} = render(<Banner/>);
        const contactButton = getByTestId('contactBtn');
        // fireEvent.click(contactButton)
    })
})