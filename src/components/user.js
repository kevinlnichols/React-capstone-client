import React from 'react';



class User extends React.Component {
    constructor(props) {
        super(props);
        // this.addFriend.bind(this);
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
        console.log(this.state.currentUser.friends);
        let newFriends = this.state.currentUser.friends.concat(newFriend);
        console.log(this.state.currentUser.friends);
        this.setState({
            currentUser: {
                friends: newFriends
            }
        })
        console.log(this.state.currentUser.friends);
    }

    render() {
        console.log(this.props.user);
        
        return (
            <div>
                <li>{this.props.user.firstName} {this.props.user.lastName}</li>
                {/* <button onClick={this.addFriend.bind(this)}>Add</button> */}
                <button onClick={() => {this.addFriend}}>Add</button>
            </div>
        );
    }
}

export default (User);