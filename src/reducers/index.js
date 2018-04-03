import { Users } from '../mock-data/users';
import * as userActions from '../actions/users';

const initialState = {
    users: [],
    ratings: [],
    groupId: null,
    groupData: null,
    group: [],
    friends: [],
    categories: [],
    allCategories: ['Barbecue', 'Buffet', 'Cafe', 'Cafeteria', 'Coffeehouse', 'Pub', 'Teppanyaki', 'Chinese',
        'Indian', 'Italian', 'Japanese', 'Soul', 'Thai', 'Mexican', 'Ethiopian', 'Mediterranean']
};


export const friendsReducer = (state = initialState, action) => {
    if (action.type === userActions.GET_USERS) {
        return Object.assign({}, state, {
            users: action.users
        })
    }
    if (action.type === userActions.ADD_FRIEND) {
        const user = Users.filter(user => {
            return user.id === action.userId;
        }); 
        return Object.assign({}, state, {
            ...state,
            currentUser: {
                ...state.currentUser,
                friends: [...state.currentUser.friends, user[0]]
            }
        });
    }
    if (action.type === userActions.VIEW_FRIENDS) {
        return Object.assign({}, state, {
            friends: action.friends
        })
    }
    if (action.type === userActions.ADD_FRIEND_TO_GROUP) {
        const group = state.group.find(g => {
            return g.groupId === state.groupId;
        });
        let member;
        let members;

        if (group) {
            member = group.members.find(g => {
                return g.id === action.userId;
            });
            if (member) {
                members = group.members.filter(m => {
                    return m.id !== action.userId;
                });
            } else {
                let friend = state.friends.find(friend => {
                    return  friend._id === action.userId;
                })
                members = group.members.concat({id: action.userId, firstName: friend.firstName, lastName: friend.lastName });
            };
            group.members = members;
        }

        return Object.assign({}, state, {
            group: [...state.group]
        });
    }
    if (action.type === userActions.CREATE_GROUP) {
        return Object.assign({}, state, {
            groupId: null,
            group: state.group.concat({
                groupName: '',
                groupId: null,
                members: []
            })
        });
    }
    if (action.type === userActions.DELETE_FRIEND_FROM_GROUP) {
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
            group: [...state.group]
        });
    }
    if (action.type === userActions.VIEW_GROUPS) {
        return Object.assign({}, state, {
            groups: action.groups
        })
    }
    if(action.type === userActions.VIEW_CURRENT_GROUP_NAME) {
        return Object.assign({}, state, {
            groupName: action.groupName
        })
    }
    if (action.type === userActions.ADD_CHOICE_FOR_VOTE) {
        return Object.assign({}, state, {
            categories: state.categories.concat(action.choiceId)
        });
    }
    if (action.type === userActions.REMOVE_CHOICE_FOR_VOTE) {
        return Object.assign({}, state, {
            categories: state.categories.filter(category => {
                if (category === action.choiceId) {
                    return false;
                } else {
                    return true;
                }
            })
        });
    }
    if (action.type === userActions.GROUP_INFO) {
        return Object.assign({}, state, {
           groupData: action.group
        });
    }
    // if (action.type === userActions.RATING_INFO) {
    //     return Object.assign({}, state, {
    //        ratingData: action.ratings
    //     });
    // }
    if (action.type === userActions.SAVED_VOTES) {
        return Object.assign({}, state, {
           categories: action.categories
        });
    }
    if (action.type === userActions.DELETE_GROUP) {
        return Object.assign({}, state, {
           group: state.group.filter(g => g.id !== action.g.id)
        });
    }
    if (action.type === userActions.DELETE_FRIEND) {
        return Object.assign({}, state, {
           friends: state.friends.filter(friend => friend.id !== action.friend.id)
        });
    }

    return state;
}
