import React from 'react';
import { addFriend } from '../actions';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';
import { getUser } from '../actions/users';
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
                    <li>{this.props.user.fullName}</li>
                </div>
                <div className="add-friend">
                    <button onClick={() => { this.addFriend(this.props.user.id) }}>Add</button>
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