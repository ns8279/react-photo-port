import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //First test or baseline test
    it('renders', () => {
        render(<About />);
    });

    //second test
    it('matches snapshot DOM node Structure', () => {
        //render about
        const{ asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})