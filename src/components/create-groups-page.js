import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import Header from './header';
import CreateGroup from './create-group';
import {viewFriend, addFriendToGroup} from '../actions/index.js';

export class CreateGroupsPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(viewFriend());
    }

    addFriendToGroup(userId) {
        this.props.dispatch(addFriendToGroup(userId));
    }

    render() { 
        return (
            <main role="main" className="create-groups-page">
                <Header />
                <section className="create-group">
                    <CreateGroup friends={this.props.friends} />
                </section>
            </main>
        );
    };
}


const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    };
};

export default connect(mapStateToProps)(CreateGroupsPage);
