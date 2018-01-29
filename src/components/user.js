import React from 'react';
import {addFriend} from '../actions';
import {connect} from 'react-redux';

class User extends React.Component {
    constructor(props) {
        super(props);
        
    }

    addFriend(userId) {
       this.props.dispatch(addFriend(userId));
    }

    render() {
        
        return (
            <div>
                <li>{this.props.user.firstName} {this.props.user.lastName}</li>
                <button onClick={(userId) => {this.addFriend(userId)}}>Add</button>
            </div>
        );
    }
}

export default connect()(User);