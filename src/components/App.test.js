import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Banner from "./banner/banner";
import Segment from "./segment/segment";

describe('app', () => {
  it('should display the correct components', () => {
    const app = shallow(<App/>);

    expect(app.contains(<Banner title={"banner title"} description={"banner description"} />)).toBe(true);
    expect(app.contains(<Segment />)).toBe(true);
  });
});
