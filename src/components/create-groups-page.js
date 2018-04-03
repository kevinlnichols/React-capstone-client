import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import CreateGroup from './create-group';
import {viewFriend} from '../actions/users.js';
import requiresLogin from './requires-login';

export class CreateGroupsPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(viewFriend());
    }

    addFriendToGroup(userId) {
       // this.props.dispatch(addFriendToGroup(userId));
    }

    render() { 
        return (
            <main role="main" className="create-groups-page">
                <Header />
                <section className="create-new-group">
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

export default requiresLogin()(connect(mapStateToProps)(CreateGroupsPage));
