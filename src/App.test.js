import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('app', () => {
  it('should find my references', () => {
    const app = shallow(<App/>);

    expect(app.find('img')).toBeTruthy();
  });
});
