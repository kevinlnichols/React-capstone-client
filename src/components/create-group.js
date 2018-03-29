import React from 'react';
import { addFriendToGroup, saveGroups, createGroup, deleteFriendFromGroup } from '../actions/users.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './create-group.css';

var inputStyle = {
    padding: '10px'
}



class CreateGroup extends React.Component {
    group;
    constructor(props) {
        super(props);
        this.props.dispatch(createGroup());
        this.state = {
            isCreatingGroup: false,
            redirect: false
        }
    }

    startCreatingGroup() {
        this.setState({
            isCreatingGroup: true
        })
    }

    addFriendToGroup(userId, groupId) {
        this.props.dispatch(addFriendToGroup(userId, groupId));
    }

    createGroups() {
        this.props.dispatch(saveGroups({ groupName: this.groupName.value, members: this.group.members }));
        this.setState({redirect: true})
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='../dashboard' />;
        }
    }

    deleteFriendFromGroup(userId, groupId) {
        this.props.dispatch(deleteFriendFromGroup(userId, groupId));
    }

    render() {
        let members = [];
        if (this.props.group) {
            this.group = this.props.group.find(g => g.groupId === this.props.groupId);
            if (this.group) {
                for (let i = 0; i < this.group.members.length; i++) {
                    let member = this.group.members[i];
                    members.push(
                        <div className="friend-container chosen">
                            {/* <li className="friend">{member.firstName} {member.lastName}</li> */}
                            <input
                                className="delete-friends hvr-grow"
                                onClick={() => this.deleteFriendFromGroup(member.id, this.props.groupId)}
                                type="button"
                                value={member.firstName + ' ' + member.lastName} />
                        </div>);
                }
            }
        }

        const addFriends = this.props.friends.map((friend, index) => {
            let found;
            if (this.group) {
                found = this.group.members.find(member => {
                    return member.id == friend._id;
                })
            }
            if (found) {
                return;
            }
            return (
                <div className="friend-container">
                    <div className="friend-card add-friend-div">
                        <input
                            onClick={() => { this.addFriendToGroup(friend._id); this.startCreatingGroup() }}
                            className="add-friend hvr-grow"
                            type="button"
                            id="add-to-group-button"
                            value={friend.firstName + ' ' + friend.lastName} />
                    </div>
                </div>)
        })

        return (
            <div className="friend-section">
                {this.renderRedirect()}
                <div className="choose-friends">
                    <ul className="friend-list">
                        {addFriends}
                    </ul>
                </div>
                <form onSubmit={() => this.createGroups()} >
                    {this.state.isCreatingGroup === true &&
                        (<div className="selected-friends" >
                            <div className="group-name-container">
                                <label>Group Name: </label>
                                <input
                                    className="input-style"
                                    style={inputStyle}
                                    type="text"
                                    ref={(input) => this.groupName = input} required />
                            </div>
                            <div className="col-container">{members}</div>
                            <button className="create-group-button hvr-grow">Create Group</button>
                        </div>)}
                </form>
            </div>
        );

    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        groupId: state.friendsReducer.groupId,
        friends: state.friendsReducer.friends,
        group: state.friendsReducer.group,
        groupName: state.friendsReducer.groupName
    };
};

export default connect(mapStateToProps)(CreateGroup);