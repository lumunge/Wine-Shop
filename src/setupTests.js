// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {configure} from 'enzyme';
import adapter from '@wojtekmaj/enzyme-adapter-react-17'

// configuring the new adapter -> done for everyy test file created
configure({ adapter: new adapter() });
