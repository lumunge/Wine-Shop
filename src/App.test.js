import React from 'react';
import App from './App.js';
import Filter from './Components/Filter/Filter';
import { mount, shallow } from 'enzyme';

describe("Rendering Components", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App/>);
    })

    test("Shows correct heading", () => {
        const heading = wrapper.find({'data-testid':'heading'}).text();
        expect(heading).toEqual('Wine Shop');
    })
    test("Shows correct url", () => {
        const url = wrapper.find({'data-testid':'url'}).text()
        expect(url).toEqual('wineshop.com');
    })
    test("Filter Component Renders Ok", () => {
        shallow(<Filter/>)
    })
})
