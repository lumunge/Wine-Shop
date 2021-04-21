import React from 'react';
import Filter from './Components/Filter';
import {shallow} from 'enzyme'

describe('Filter Component Testing', () => {
    it('Should Render Correctly in Debug Mode', () => {
        const comp = shallow(<Filter debug/>);
        expect(comp).toMatchSnapshot();
    })
})


