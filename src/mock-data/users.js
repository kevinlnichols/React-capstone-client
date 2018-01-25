export let Users = [
    {
        id: 1,
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
        friends: [2, 3],
    },
    {
        id: 2,
        name: {
            firstName: 'Julie',
            lastName: 'Nichols'
        },
        username: 'jnichols',
        password: '1234567890',
        ratings: [
            {
                restaurant: 'Tacos',
                rating: 8,
                category: 'Mexican'
            },
            {
                restaurant: 'Twenty Tap',
                rating: 7,
                category: 'American Pub'
            }
        ],
        groupId: [12345, 23456],
        friends: [1, 3],
    },
    {
        id: 3,
        name: {
            firstName: 'Finn',
            lastName: 'Nichols'
        },
        username: 'fnichols',
        password: '1234567890',
        ratings: [
            {
                restaurant: 'Tacos',
                rating: 1,
                category: 'Mexican'
            },
            {
                restaurant: 'Twenty Tap',
                rating: 1,
                category: 'American Pub'
            }
        ],
        groupId: [12345, 23456],
        friends: [1, 2],
    }
]