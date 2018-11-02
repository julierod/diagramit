import React from 'react';
import Segment from './segment';
import {shallow} from 'enzyme';
import Storyboard from "../storyboard/storyboard";

describe('Segment', () => {
    it('should display the storyboard, steps, and text area', () => {
        const segment = shallow(<Segment />);

        expect(segment.contains(<Storyboard />)).toBe(true);
    });
});
