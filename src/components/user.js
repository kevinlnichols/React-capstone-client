import React from 'react';



class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                name: {
                    firstName: 'Ralph',
                    lastName: 'Nichols'
                },
                friends: []
            }
        }
    }

    addFriend(newFriend) {
        let newFriends = this.state.currentUser.friends.concat(newFriend);
        this.setState({
            currentUser: {
                friends: newFriends
            }
        })
        console.log(this.state.currentUser.friends)
    }

    render() {
        console.log(this.props.user);
        
        return (
            <div>
                <li>{this.props.user.firstName} {this.props.user.lastName}</li>
                <button onClick={this.addFriend.bind(this)}>Add</button>
            </div>
        );
    }
}

export default (User);