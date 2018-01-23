import React from 'react';
import {connect} from 'react-redux';

import User from './user';
import {addUser} from '../actions';

import './search-bar.css';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    addUser(name) {
        this.props.dispatch(addUser(name));
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }
   
    render() {
        console.log(this.props.users);
        let filteredUsers = this.props.users.filter(
            (user) => {
                console.log('Hello' + user.firstName);
                return user.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

            }
        );
        console.log(this.props.users);
        return (
            <div>
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
                {this.state.search && <ul>
                    {filteredUsers.map((user) => {
                        console.log(user);
                        return <User user={user} key={user.id} onAdd={name => this.addUser(name)}/>
                    })}
                </ul>}
            </div>
        );
    }
}

export default (SearchBar);