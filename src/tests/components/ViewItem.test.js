import React from 'react';
import { shallow } from 'enzyme';
import ViewItem from '../../components/ViewItem';



describe('testing ViewItem component',()=> {
    let wrapper;
    beforeEach(()=>{
         wrapper = shallow(<ViewItem location={location}/>);
    })

    test('should test ViewItem component',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('should render view item page',()=>{
        expect(wrapper.find('div.view-item')).toHaveLength(1);
    });

    test('should render Back to Dashboard button',()=>{
        expect(wrapper.find('div#nav-bar-button')).toHaveLength(1);
    })

    test('should render view page item image',()=>{
        expect(wrapper.find('img')).toHaveLength(1);
    })

    test('should render all item labels',()=>{
        expect(wrapper.find('p')).toHaveLength(7);
        expect(wrapper.find('strong')).toHaveLength(7);
    })

    test('should make Availability into dropdown',()=>{
        expect(wrapper.find('select.availability-selector')).toHaveLength(0);
        expect(wrapper.find('span.edit-pen')).toHaveLength(2);
        wrapper.find('span.edit-pen').at(0).simulate('click');
        expect(wrapper.find('span.edit-pen')).toHaveLength(1);
        expect(wrapper.find('select.availability-selector')).toHaveLength(1);
    })

    test('should make Price into input text',()=>{
        expect(wrapper.find('input.price-text')).toHaveLength(0);
        expect(wrapper.find('span.edit-pen')).toHaveLength(2);
        wrapper.find('span.edit-pen').at(1).simulate('click');
        expect(wrapper.find('span.edit-pen')).toHaveLength(1);
        expect(wrapper.find('input.price-text')).toHaveLength(1);
    })

    test('test cancel functionality',()=>{
        wrapper.find('span.edit-pen').at(0).simulate('click');
        expect(wrapper.find('select.availability-selector')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(2);
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('select.availability-selector')).toHaveLength(0);
    })

    test('test save functionality',()=>{
        wrapper.find('span.edit-pen').at(1).simulate('click');
        expect(wrapper.find('input.price-text')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(2);
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('button')).toHaveLength(0);
    })

    
    test('should edit Price',()=>{
        wrapper.find('span.edit-pen').at(1).simulate('click');
        expect(wrapper.find('input.price-text')).toHaveLength(1);
        wrapper.find('input.price-text').simulate("change", { target: { value: 4000 }});
        wrapper.find('button').at(0).simulate('click');
       expect( wrapper.find('[data-test="price"]').text()).toBe("4000");
    })

    test('should change Availability',()=>{
        wrapper.find('span.edit-pen').at(0).simulate('click');
        expect(wrapper.find('select.availability-selector')).toHaveLength(1);
        wrapper.find('select').simulate('change', {target : { value : 'Out of stock'}});
        wrapper.find('button').at(0).simulate('click');
        expect( wrapper.find('[data-test="available"]').text()).toBe("Out of stock");
    })

    test('test back to dashboard button',()=>{
        const historyMock = {push: jest.fn()}
        wrapper = shallow(<ViewItem history={historyMock} location={location}/>);
        wrapper.find('div#nav-bar-button').simulate('click');
        expect(historyMock.push).toHaveBeenCalled();
})
});





const location ={"state":{
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
  }};