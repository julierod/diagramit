import React from 'react';
import Storyboard from './storyboard';
import {shallow} from 'enzyme';

describe('Storyboard', () => {
    it('should display the image', async () => {
        let images = ['image1', 'image2'];
        const storyboard = shallow(<Storyboard images={images}/>);

        let imgElements = await storyboard.find('img');
        expect(imgElements).toHaveLength(images.length);
        expect(imgElements.get(0).props.src).toBe('image1');
        expect(imgElements.get(1).props.src).toBe('image2');
    });
});