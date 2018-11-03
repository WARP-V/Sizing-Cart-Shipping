/* eslint react/jsx-filename-extension: [0] */

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../client/src/components/App';
import Sizes from '../client/src/components/Sizes';
import Description from '../client/src/components/Description';
import Row from '../client/src/components/Row';

configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper1 = shallow(<App />);
  it('should render a shallow copy of App', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });
});

describe('Description', () => {
  const wrapper2 = shallow(<Description />);
  it('should render a shallow copy of Description', () => {
    expect(wrapper2.exists()).toBeTruthy();
  });
});

describe('Sizes', () => {
  const wrapper3 = shallow(<Sizes />);
  it('should render a shallow copy of Sizes', () => {
    expect(wrapper3.exists()).toBeTruthy();
  });
});

describe('Row', () => {
  const wrapper4 = shallow(<Row />);
  it('should render a shallow copy of Row', () => {
    expect(wrapper4.exists()).toBeTruthy();
  });
});

describe('App', () => {
  it('should render 18 div tags', async () => {
    const wrapper5 = await mount(<App />);
    expect(wrapper5.find('.sizes-buttons').length).toBe(18);
  });
});
