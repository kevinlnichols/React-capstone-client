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
export const addFriendToGroup = userId => ({
    type: ADD_FRIEND_TO_GROUP,
    userId: userId
});
