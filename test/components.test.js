import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../client/src/components/App';
import Sizes from '../client/src/components/Sizes';
import Description from '../client/src/components/Description';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('Description', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Description debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('Sizes', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Sizes debug />);
    expect(component).toMatchSnapshot();
  });
});