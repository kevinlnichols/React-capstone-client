import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import VotePage from './vote-page';

describe('<VotePage />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <VotePage />
                </Provider>);
    });
});