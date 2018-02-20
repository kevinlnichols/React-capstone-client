import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import { friendsReducer } from './reducers/index';
import { authReducer } from './reducers/auth';
import { protectedDataReducer } from './reducers/protected-data';

const store = createStore(
    combineReducers({
        form: formReducer,
        friendsReducer: friendsReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}




export default store;