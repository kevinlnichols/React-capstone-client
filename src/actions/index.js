export const ADD_FRIEND = 'ADD_FRIEND';
export const addFriend = userId => ({
    type: ADD_FRIEND,
    userId: userId
});

export const VIEW_FRIENDS = 'VIEW_FRIENDS';
export const viewFriend = () => ({
    type: VIEW_FRIENDS,
});

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