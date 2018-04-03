import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
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

    addFriend(userId, userFullName) {
        this.props.dispatch(addFriend(userId));
    }

    render() {
        return (
            <div className="add-friend-container">
                <div className="fullName-box">
                    <li key={this.props.user._id} className="fullName-li">{this.props.user.fullName}</li>
                </div>
                <div className="add-a-friend">
                    <button 
                        key={this.props.user._id} 
                        className="add-a-friend-button hvr-box-shadow-outset" 
                        onClick={() => { this.addFriend(this.props.user._id)}}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        protectedData: state.protectedData.data,
    };
};

export default connect(mapStateToProps)(User);