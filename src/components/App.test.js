import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Banner from "./banner/banner";

describe('app', () => {
  it('should find my references', () => {
    const app = shallow(<App/>);

    expect(app.contains(<Banner title={"banner title"} description={"banner description"} />)).toBe(true);
  });
});
