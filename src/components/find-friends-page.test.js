import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import FindFriendsPage from './find-friends-page';

describe('<FindFriendsPage />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <FindFriendsPage />
                </Provider>);
    });
});