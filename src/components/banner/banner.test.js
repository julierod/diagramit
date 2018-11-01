import React from 'react';
import Banner from './banner';
import { shallow } from 'enzyme';

describe('Banner', () => {

    it('should display the given title and description', () => {
        const banner = shallow(<Banner title={"banner title"} description={"banner description"} />);

        expect(banner.contains(<h1>banner title</h1>)).toBe(true);
        expect(banner.contains(<p>banner description</p>)).toBe(true);
    })

});