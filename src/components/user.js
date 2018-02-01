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
        console.log(this.props.user);
        return (
            <div>
                <li>{this.props.user.firstName} {this.props.user.lastName}</li>
                {/* <button onClick={() => {this.addFriend(2)}}>Add</button> */}
                <button onClick={() => {this.addFriend(this.props.user.id)}}>Add</button>
            </div>
        );
    }
}

export default connect()(User);