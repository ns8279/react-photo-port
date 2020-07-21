import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav Component', () => {
    //first test or basline tests
    it('renders', () => {
        render(<Nav />);
    });

    //second tests or Snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

//tests  to check the emoji visibility
describe('Emoji visibility', () => {
    it('inserts emoji to the h2', () => {
        //Arrange
        const { getByLabelText } = render(<Nav />);
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})