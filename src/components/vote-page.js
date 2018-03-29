import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import './vote-page.css';

import Header from './header';
import BackButton from './back-button';
import { addChoiceForVote, removeChoiceForVote, saveVoting, groupInfo } from '../actions/users';


let buttonStyle = {
    width: '100%'
}

let buttonStyle2 = {
    width: '30%',
    margin: '5px'
}

const style = {
    width: '90%',
    margin: 20,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'antiquewhite'
};

const style2 = {
    color: 'antiquewhite',
    margin: '15px'
};

export class VotePage extends React.Component {
    constructor(props) {
        super(props);
    }

    

    savedVotes() {
        this.props.dispatch(saveVoting(this.props.categories, this.props.match.params.id));
        this.props.dispatch(groupInfo());
    }

    addChoiceForVote(choiceId, groupId) {
        console.log(choiceId);
        this.props.dispatch(addChoiceForVote(choiceId, groupId));
    }

    removeChoiceForVote(choiceId, groupId) {
        this.props.dispatch(removeChoiceForVote(choiceId, groupId));
    }

    render() {
        let currentGroup;
        if (this.props.groups) {
            currentGroup = this.props.groups.map(group => {
                if (group._id === this.props.match.params.id) {
                    return (
                        <div className="vote-page-title">
                            <h4>{group.groupName}</h4>
                        </div>
                    )
                }
            })
        }

        console.log(this.props.groups);
        let categories;
        if (this.props.categories) {
            categories = this.props.categories.map((category) => {
                return (
                    <input value={category} onClick={() => this.removeChoiceForVote(category, this.props.match.params.id)} style={buttonStyle2} className="choice-button-2" type="button" value={category} />
                )
            })
        }
        const allCategories = this.props.allCategories.map((category) => {
            const found = this.props.categories.find(myCategory => {
                return myCategory == category;
            })
            if (found) {
                return;
            }
            return (
                <div className="choice">
                    <input id={category} onClick={() => this.addChoiceForVote(category, this.props.match.params.id)} style={buttonStyle} className="choice-button" type="button" value={category} />
                </div>
            )
        })
        console.log(allCategories);
        return (
            <main role="main" className="vote-page">
                <Header />
                <section className="title-section" >
                    {currentGroup}
                </section>
                <section className="vote-section">
                    <Paper style={style} zDepth={2} >
                        {allCategories}
                    </Paper>
                    {/* <div className="choices-section">
                        {allCategories}
                    </div> */}
                </section>
                <section>
                    <div id="user-choices" className="user-choices">
                        <Paper style={style} zDepth={2} >
                            {categories}
                            {/* <input onClick={() => this.savedVotes()} type="button" value="Vote" /> */}
                            <RaisedButton
                                onClick={() => this.savedVotes()}
                                style={style2}
                                label="Vote" />
                        </Paper>
                    </div>
                </section>
            </main>
        );
    };
}


const mapStateToProps = state => {

    return {
        friends: state.friendsReducer.friends,
        groups: state.auth.currentUser.groups,
        categories: state.friendsReducer.categories,
        allCategories: state.friendsReducer.allCategories
    };
    console.log(state);
};

export default connect(mapStateToProps)(VotePage);

