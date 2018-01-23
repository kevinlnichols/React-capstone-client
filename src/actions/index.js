export const ADD_USER = 'ADD_USER';
export const addUser = (text, friendIndex) => ({
    type: ADD_USER,
    text,
    friendIndex
});