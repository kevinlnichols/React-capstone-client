const initialState = {
    
}

export default initialState;

const users = {
    name: {
        firstName: 'Kevin',
        lastName: 'Nichols'
    },
    username: 'knichols',
    password: '1234567890',
    ratings: [
        {
            restaurant: 'Tacos',
            rating: 9,
            category: 'Mexican'
        },
        {
            restaurant: 'Twenty Tap',
            rating: 8,
            category: 'American Pub'
        }
    ],
    groupId: [12345, 23456],
    friendsList: [1, 2, 3],
}

const groups = {
    members: [],
    averageRatings: [
        {
            restaurant: 'Tacos',
            rating: 7.1,
            category: 'Mexican'  
        },
        {
            restaurant: 'Twenty Tap',
            rating: 8.5,
            category: 'American Pub'
        }
    ]
}