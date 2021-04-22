import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';
import Wine from '../../Wine/Wine';

describe('Filter Component Testing', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Filter/>)
    })

    test("Renders Heading", () => {
        const wrapper = shallow(<Filter/>);
        const span1 = (<span>Show Me</span>);
        const span2 = (<span>Show All</span>)
        expect(wrapper.contains(span1)).toEqual(true);
        expect(wrapper.contains(span2)).toEqual(true);
    })
    
    test("Renders First 3 Buttons Correctly", () => {
        const white = wrapper.find({'data-testid' : 'white'}).text();
        const red = wrapper.find({'data-testid' : 'red'}).text();
        const sparkling = wrapper.find({'data-testid' : 'sparkling'}).text();
        expect(white).toEqual("White");
        expect(red).toEqual("Red");
        expect(sparkling).toEqual("Sparkling");
    })
})
