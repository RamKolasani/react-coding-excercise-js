import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

test('should have 2 routes',()=>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('Route')).toHaveLength(2);
})
