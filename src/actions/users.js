import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const GET_USERS = 'GET_USERS';
export const getUsers = users => ({
    type: GET_USERS,
    users
});

export const ADD_FRIEND = 'ADD_FRIEND';
export const addFriends = (userId) => ({
    type: ADD_FRIEND,
    userId
});

export const VIEW_FRIENDS = 'VIEW_FRIENDS';
export const viewFriends = friends => ({
    type: VIEW_FRIENDS,
    friends
});

export const ADD_FRIEND_TO_GROUP = 'ADD_FRIEND_TO_GROUP';
export const addFriendToGroup = (userId, groupId) => ({
    type: ADD_FRIEND_TO_GROUP,
    userId,
    groupId
});

export const ADD_CHOICE_FOR_VOTE = 'ADD_CHOICE_FOR_VOTE';
export const addChoiceForVote = (choiceId, groupId) => ({
    type: ADD_CHOICE_FOR_VOTE,
    choiceId,
    groupId
});

export const REMOVE_CHOICE_FOR_VOTE = 'REMOVE_CHOICE_FOR_VOTE';
export const removeChoiceForVote = (choiceId, groupId) => ({
    type: REMOVE_CHOICE_FOR_VOTE,
    choiceId,
    groupId
});

export const CREATE_GROUP = 'CREATE_GROUP';
export const createGroup = () => ({
    type: CREATE_GROUP,
});

export const DELETE_FRIEND_FROM_GROUP = 'DELETE_FRIEND_FROM_GROUP';
export const deleteFriendFromGroup = (userId, groupId) => ({
    type: DELETE_FRIEND_FROM_GROUP,
    userId: userId,
    groupId: groupId
});

export const VIEW_GROUPS = 'VIEW_GROUPS';
export const viewGroups = friends => ({
    type: VIEW_GROUPS,
    friends
});

export const VIEW_CURRENT_GROUP_NAME = 'VIEW_CURRENT_GROUP_NAME';
export const viewCurrentGroupName = groupName => ({
    type: VIEW_CURRENT_GROUP_NAME,
    groupName
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const getUser = filter => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            dispatch(getUsers(res))
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const addFriend = (id) => dispatch => {
    return fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.authToken}`
        },
        data: JSON.stringify({id}),
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            dispatch(addFriends(res))
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const viewFriend = view => dispatch => {
    return fetch(`${API_BASE_URL}/users/myusers`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            dispatch(viewFriends(res))
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};


export const saveGroups = (group) => dispatch => {
    let membersId = group.members.map(member => {
        return member.id;
    });
    group.members = membersId;
    return fetch(`${API_BASE_URL}/users/group/create`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.authToken}`
        },
        body: JSON.stringify(group)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const viewGroup = view => dispatch => {
    console.log(view);
    return fetch(`${API_BASE_URL}/users/groups/view`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            dispatch(viewGroups(res))
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const groupVoteInfo = info => dispatch => {
    console.log(info);
    return fetch(`${API_BASE_URL}/users/group/vote`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            dispatch(viewCurrentGroupName(res))
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

