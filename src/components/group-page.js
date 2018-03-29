import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './group-page.css';

import Header from './header';
import GroupResults from './group-results';
import { groupVoteInfo, groupInfo, deletingGroup } from '../actions/users';

const style = {
    width: '90%',
    margin: 20,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'antiquewhite'
};

const style2 = {
    color: 'antiquewhite'
};


export class GroupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            redirect: false
        }

    }

    deleteGroup() {
        console.log(this.props.match.params.id);
        this.props.dispatch(deletingGroup(this.props.match.params.id));
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='../dashboard' />
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };

    componentDidMount() {
        this.props.dispatch(groupInfo(this.props.match.params.id));
    }

    delete = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Do you want to delete this group?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteGroup()
                },
                {
                    label: 'No'
                }
            ]
        })
    };



    render() {
        console.log(this.props.groupData);

        let currentGroup;
        if (this.props.groupData) {
            currentGroup = this.props.groupData.map(group => {
                if (group._id === this.props.match.params.id) {
                    return (
                        <div className="group-page-title">
                            <h4>{group.groupName}</h4>
                        </div>
                    )
                }
            })
        }
        let group;
        if (this.props.groupData) {
            group = this.props.groupData.find(group => {
                if (group._id === this.props.match.params.id) {
                    return true;
                }
            })
        }
        console.log(group);
        let voteInfo;
        if (group) {
            voteInfo = group.votes;
            //.find(groupId => {
            //     if (group._id === groupId.groupId) {
            //         return true;
            //     }
            // })
        }
        console.log(voteInfo);
        let members;
        if (group && group.members && voteInfo) {
            members = group.members.map(member => {
                let categories = (<p>Has not voted yet</p>);
                    voteInfo.forEach(vote => {
                    console.log(vote.memberId);
                    if (member._id === vote.memberId) {
                        categories = (<p>{vote.categories.join(', ')}</p>)
                    } 
                });
                console.log(categories);
                return (
                    <div className="member-card-container">
                        <Card className="member-card" expanded={this.state.expanded} onExpandChange={this.handleExpandChange} >
                            <CardHeader
                                title={member.firstName + ' ' + member.lastName}
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <CardTitle title="Vote Results" expandable={true} />
                            <CardText expandable={true}>
                                {categories}
                            </CardText>
                        </Card>
                    </div>
                )
            })
        }
        
        return (
            <main role="main" className="group-page">
                <Header />
                {this.renderRedirect()}
                <section className="title-section-container" >
                    <div className="title-section-group-page">
                        {currentGroup}
                    </div>
                    <div className="vote-button-section" >
                        <Link to={'/vote-page/' + this.props.match.params.id}>
                            <RaisedButton style={style2} label="Vote" />
                        </Link>
                    </div>
                </section>
                <section className="member-section" >
                    <Paper style={style} zDepth={2} >
                        {members}
                    </Paper>
                </section>
                <section className="member-section" >
                    <RaisedButton
                        onClick={this.delete}
                        style={style2}
                        label="Delete Group" />
                </section>
                <section className="results-section" >
                    <GroupResults groupId={this.props.match.params.id} />
                </section>
            </main>
        );
    };
}


const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        categories: state.friendsReducer.categories,
        allCategories: state.friendsReducer.allCategories,
        groupData: state.friendsReducer.groupData,
        ratingData: state.friendsReducer.ratingData
    };
};

export default connect(mapStateToProps)(GroupPage);
