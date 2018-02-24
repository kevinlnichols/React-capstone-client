export const ADD_FRIEND_TO_GROUP = 'ADD_FRIEND_TO_GROUP';
export const addFriendToGroup = (userId, groupId) => ({
    type: ADD_FRIEND_TO_GROUP,
    userId: userId,
    groupId: groupId
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