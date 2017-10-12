import React from 'react';
import { shallow } from 'enzyme';
import App from '../../app/containers/App/App';

describe('Enzyme Shallow', function () {
    it('App\'s title should be Todos', function () {
        let app = shallow(< App />);
        expect(app.find('h1').text()).to.equal('Todos');
    });
})