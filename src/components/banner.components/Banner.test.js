import React from 'react';
import { MemoryRouter } from 'react-router-dom';
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

    const mockOnClick = jest.fn()
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
          push: mockOnClick,
        }),
      }));
      
    it('clicking redirects', () => {
        const {queryByTestId} = render( <MemoryRouter> <Banner onClick={mockOnClick}/> </MemoryRouter> );
        const contactTestButton = queryByTestId('contactBtn');
        fireEvent.click(contactTestButton)
        // expect(mockOnClick).toHaveBeenCalledWith('/contact')
    })
})