import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';
import { getUser, addFriend } from '../actions/users';
import './user.css';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(getUser());
    }

    addFriend(userId) {
        this.props.dispatch(addFriend(userId));
    }

    render() {
        console.log(this.props.user);
        return (
            <div className="add-friend-container">
                <div className="fullName-box">
                    <li className="fullName-li">{this.props.user.fullName}</li>
                </div>
                <div className="add-a-friend">
                    <button className="add-a-friend-button" onClick={() => { this.addFriend(this.props.user._id)}}>Add</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        protectedData: state.protectedData.data,
    };
};

//export default requiresLogin()(connect(mapStateToProps)(User));
export default connect(mapStateToProps)(User);