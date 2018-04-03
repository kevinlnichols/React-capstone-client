import React from 'react';
import { connect } from 'react-redux';

import User from './user';
import { fetchProtectedData } from '../actions/protected-data';
import { getUser } from '../actions/users';

import './search-bar.css';

var inputStyle = {
    padding: '15px'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(getUser());
    }

    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        let filteredUsers; 
        if (this.props.users) {
            filteredUsers = this.props.users.filter(
                (user) => {
                    return user.fullName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

                }
            );
            filteredUsers = filteredUsers.map((user, index) => {
                return <User friends={this.props.friends} key={index} className="user-view-container" user={user} />
            })
        }
        return (
            <div>
                <input
                    placeholder="Search for friends..."
                    style={inputStyle}
                    type="text"
                    className="find-friend"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                {this.state.search && <ul>
                    {filteredUsers}
                </ul>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fullName: state.friendsReducer.users,
        protectedData: state.protectedData.data,
        users: state.friendsReducer.users
    };
};

export default connect(mapStateToProps)(SearchBar);