import * as actions from '../actions';
import {Users, friends} from '../mock-data/users';

const initialState = {
    currentUser: {
        name: {
            firstName: 'Ralph',
            lastName: 'Nichols'
        },
    },
    username: 'rnichols',
    password: '1234567890',
    ratings: [
        {
            restaurant: 'Tacos',
            rating: 9,
            category: 'Mexican'
        }
    ],
    group: [
        {
            groupId: 1,
            members: ['Jake']
        }
    ],
    friends: []
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
    if (action.type === actions.VIEW_FRIENDS) {
      return Object.assign({}, state, {
          friends: friends
      })  
    }  
    if (action.type === actions.ADD_FRIEND_TO_GROUP) {
        const user = Users.filter(user => {
            return user.id === action.userId;
        }); console.log(user[0]);
        return Object.assign({}, state, {
            ...state,
            currentUser: {
                ...state.currentUser,
                group: [...state.currentUser.group, user[0]] 
            }
        });
    } 
    
    return state;
}
