import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../components/Dashboard';

describe('test Dashboard component',() =>{
    let wrapper;
    beforeAll(()=>{
        wrapper = shallow(<Dashboard MenuData={MenuData}/>)
    });

    test('test Dashboard snapshot',()=>{
        //const wrapper = shallow(<Dashboard MenuData={MenuData}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should render Dashboard',()=>{
       // const wrapper = shallow(<Dashboard MenuData={MenuData}/>);
        expect(wrapper.find('div.dashboard')).toHaveLength(1);
    });

    test('should render 1 ul and 3 li items 3 3DisplayMenuItems',()=>{
        expect(wrapper.find('ul.items-list')).toHaveLength(1);
        expect(wrapper.find('li')).toHaveLength(3);
        expect(wrapper.find('DisplayMenuItems')).toHaveLength(3);
    } )
})



const MenuData = {
    "16306": {
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
    },
    "16307": {
      "name": "Sakura Sunrise",
      "category": "Beverages",
      "itemId": 16307,
      "imageUrl": "https://presto-resources.s3.amazonaws.com/android__menueditor_images__/images/dynamic/KIaecKJUEeqcuIyFkDJJSQ.jpg",
      "price": 400,
      "tax": 8.25,
      "available": true,
      "description": "Alcohol Free",
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
    },
    "16308": {
      "name": "Shirley Temple",
      "category": "Beverages",
      "itemId": 16308,
      "imageUrl": "https://presto-resources.s3.amazonaws.com/android__menueditor_images__/images/dynamic/KlJfY6JUEeqPSYyFkDJJSQ.jpg",
      "price": 400,
      "tax": 8.25,
      "available": true,
      "description": "Alcohol Free",
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
    }
}