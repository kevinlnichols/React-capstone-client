import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const GET_USERS = 'GET_USERS';
export const getUsers = users => ({
    type: GET_USERS,
    users
});

export const ADD_FRIEND = 'ADD_FRIEND';
export const addFriends = userId => ({
    type: ADD_FRIEND,
    userId
});

export const VIEW_FRIENDS = 'VIEW_FRIENDS';
export const viewFriends = () => ({
    type: VIEW_FRIENDS,
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

export const addFriend = add => dispatch => {
    console.log("add", add)
    return fetch(`${API_BASE_URL}/users/${add}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.authToken}`
        },
        data: JSON.stringify({add}),
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
    return fetch(`${API_BASE_URL}/myUser`, {
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
