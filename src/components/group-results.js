import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


import Header from './header';
import { groupInfo } from '../actions/users';

const style = {
    width: '90%',
    margin: 20,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'antiquewhite'
};

export class GroupResults extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.dispatch(groupInfo());
    }

    render() {
        console.log(this.props.groupData);
        console.log(this.props.groupId);

        let group;
        if (this.props.groupData) {
            group = this.props.groupData.find(g => {
                if (g._id === this.props.groupId) {
                    return true;
                }
            })
        }  
        console.log(group);

        let voteInfo;
        if (group) {
            voteInfo = group.votes;
        }
        console.log(voteInfo);

        let categoryArray = {};
        if (voteInfo) {
            for (let i=0; i < voteInfo.length; i++) {
                let cat = voteInfo[i].categories;
                for (let j=0; j < cat.length; j++) {
                    let catLoop = cat[j];
                    if (categoryArray[catLoop]) {
                        categoryArray[catLoop]++
                    } else {
                        categoryArray[catLoop] = 1;
                    }
                }
            }
        }
        console.log(categoryArray);

        let sortedArray;
        if (categoryArray) {
            sortedArray = [];
            for (var category in categoryArray) {
                sortedArray.push([category, categoryArray[category]]);
            }
            sortedArray.sort(function(a, b) {
                return b[1] - a[1];
            })
        }
        console.log(sortedArray);

        let topChoice;
        if (sortedArray.length > 0) {
            topChoice = (<p>{sortedArray[0][0]}</p>)
        }

        return (
            <section>
                <Paper style={style} zDepth={2} >
                    HI
                    {topChoice}
                    <input type="text" />
                    <button>search</button>
                </Paper>
            </section>
        );
    };
}


const mapStateToProps = state => {
    return {
        groupData: state.friendsReducer.groupData
    };
};

export default connect(mapStateToProps)(GroupResults);
