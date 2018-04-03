import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import GroupPage from './group-page';

describe('<GroupPage />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <GroupPage />
                </Provider>);
    });
});