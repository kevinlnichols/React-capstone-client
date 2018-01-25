import * as actions from '../actions';
import {Users} from '../mock-data/users';

const initialState = {
    currentUser: {
        name: {
            firstName: 'Ralph',
            lastName: 'Nichols'
        },
        friends: []
    }
};



export const friendsReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_FRIEND) {
        const user = Users.filter(user => {
            return user.id === action.userId;
        }); console.log(user[0]);
        return Object.assign({}, state, {
            ...state,
            currentUser: {
                ...state.currentUser,
                friends: [...state.currentUser.friends, user[0]] 
            }
        });
        console.log(state);
    }
    
    return state;
}