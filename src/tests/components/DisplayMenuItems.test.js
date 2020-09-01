import React from 'react';
import { shallow } from 'enzyme';
import DisplayMenuItems from '../../components/DisplayItems';

const item={
    "name": "Coffee",
    "category": "Beverages",
    "itemId": 16306,
    "imageUrl": "https://presto-resources.s3.amazonaws.com/android__menueditor_images__/images/dynamic/Jw5kV6JUEeqSXYyFkDJJSQ.jpg",
    "price": 200,
    "tax": 8.25,
    "available": true,
    "description": "",
    "modifierGroups": {},
    "timePeriods": [
      {
        "price": null,
        "description": null,
        "daysOfWeek": [],
        "period": [],
        "alwaysAvailable": true
      }
    ]
  };

describe('test DisplayMenuItems component',()=>{
    let wrapper;
    beforeEach(()=>{
         wrapper = shallow(<DisplayMenuItems  item={item} />);
    })
    test('test DisplayMenuItem snapshot', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('should render image', ()=>{
        expect(wrapper.find('img')).toHaveLength(1);
    })

    test('should render item details', ()=>{
        expect(wrapper.find('p')).toHaveLength(5);
    })
})