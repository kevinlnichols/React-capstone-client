import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import CreateGroupsPage from './create-groups-page';

describe('<CreateGroupsPage />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <CreateGroupsPage />
                </Provider>);
    });
});