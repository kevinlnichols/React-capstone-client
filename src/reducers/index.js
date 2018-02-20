import * as actions from '../actions';
import { Users, friends } from '../mock-data/users';

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
    groupId: null,
    group: [
        {
            groupName: 'blah',
            groupId: 1,
            members: [{
                id: 4,
                name: {
                    firstName: 'John',
                    lastName: 'Nichols'
                }
            }]
        },
    ],
    friends: []
};


export const friendsReducer = (state = initialState, action) => {
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
        const group = state.group.find(g => {
            return g.groupId === action.groupId;
        });
        const member = group.members.find(g => {
            return g.id === action.userId;
        });
        let members;
        if (member) {
            members = group.members.filter(m => {
                return m.id !== action.userId;
            });
        } else {
            members = group.members.concat(action.userId);
        };
        group.members = members;
        return Object.assign({}, state, {
            group: [...state.group ]
        });
    }
    if (action.type === actions.CREATE_GROUP) {
        return Object.assign({}, state, {
            groupId: 10,
            group: state.group.concat({
                groupName: '',
                groupId: 10,
                members: []
            })
        });
    }
    if (action.type === actions.DELETE_FRIEND_FROM_GROUP) {
        const group = state.group.find(g => {
            return g.groupId === action.groupId;
        });
        const member = group.members.find(g => {
            return g.id === action.userId;
        });
        let members;
        if (member) {
            members = group.members.filter(m => {
                return m.id !== action.userId;
            });
        }
        group.members = members;
        return Object.assign({}, state, {
            group: [...state.group ]
        });
    }

    return state;
}
