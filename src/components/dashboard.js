import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './dashboard.css';

import Header from './header';
import ViewFriends from './view-friends';
import { viewFriend, viewGroup } from '../actions/users.js';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(viewFriend());
        this.props.dispatch(viewGroup());
    }


    render() {
        return (
            <main role="">
                <Header />
                <section className="row">
                    <div className="column left">
                        <header className="dashboard-header">
                            <h3>Hello {this.props.fullName}</h3>
                        </header>
                    </div>
                    <div className="column middle">
                        <div className="top-row">
                            <h5>Groups</h5>
                        </div>
                        <div className="find-create-buttons top-row">
                            <Link className="create-group" to="/create-groups-page" friends={this.props.friends}>Create Group</Link>
                        </div>
                        <ul>
                            {console.log(this.props.groups)}
                            {this.props.groups.map((group, index) => <Link to={'/vote-page/' + group._id}><li className="group-box" key={index}>{group.groupName}</li></Link>)}
                        </ul>
                    </div>
                    <div className="column right">
                        <div className="top-row">
                            <h5>Friends</h5>
                        </div>
                        <div className="find-create-buttons top-row">
                            <Link className="find-friends" to="/find-friends-page" >Add Friends</Link>
                        </div>
                        <div>
                            <ViewFriends friends={this.props.friends} />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.friendsReducer.friends);
    const { currentUser } = state.auth;
    return {
        fullName: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        friends: state.friendsReducer.friends,
        username: state.auth.currentUser.username,
        groups: currentUser.groups
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));