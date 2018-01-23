import * as actions from '../actions';

const initialState = {
    currentUser: {
        name: {
            firstName: 'Ralph',
            lastName: 'Nichols'
        },
        friends: []
    }
};

export const reduxReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_USER) {
        return Object.assign({}, state, {
           friends: [...state.friends, {
               name: {
                   firstName: action.firstName,
                   lastName: action.lastName
               }
           }] 
        });
    }
    return state;
}