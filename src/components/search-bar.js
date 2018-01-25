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

    updateSearch(event) {
        this.setState({search: event.target.value});
    }
   
    render() {
        let filteredUsers = this.props.users.filter(
            (user) => {
                return user.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

            }
        );
        return (
            <div>
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
                {this.state.search && <ul>
                    {filteredUsers.map((user) => {
                        return <User user={user} key={user.id}/>
                    })}
                </ul>}
            </div>
        );
    }
}

export default (SearchBar);