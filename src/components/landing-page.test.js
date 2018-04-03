import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import LandingPage from './landing-page';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <LandingPage />
                </Provider>);
    });
});