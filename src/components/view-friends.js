import React from 'react';
import { addFriend, deletingFriend } from '../actions/users.js';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { Link, Redirect } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './view-friends.css';

export class ViewFriends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='./dashboard' />
        }
    }

    deleteFriendFxn = (friendId) => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Do you want to delete this friend? :(',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.deleteFriend(friendId)
            },
            {
              label: 'No'
            }
          ]
        })
      };

      deleteFriend(friendId) {
        console.log(friendId);
        console.log(deletingFriend);
        console.log(this.props);
        this.props.dispatch(deletingFriend(friendId));
        this.setState({redirect: true})
    }

    render() {
        let friend;
        if (this.props.friends) {
            friend = this.props.friends.map(friend => {
                return friend._id;
            })
        }

        console.log(friend);
        return (
            <ul>
                {this.props.friends.map((friend, index) =>
                    <li className="friend-li" key={index}>
                        <button 
                            className="friend-box"
                            onClick={() => this.deleteFriendFxn(friend._id)}>
                            {friend.firstName} {friend.lastName}
                        </button>
                    </li>)}
            </ul>
        );
    }
}

export default connect()(ViewFriends);
