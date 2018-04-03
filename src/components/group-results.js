import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import './group-result.css';

import { groupInfo } from '../actions/users';

const style = {
    width: '90%',
    margin: 20,
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'antiquewhite'
};

const mapStyle = {
    width: '100vw',
    height: '75vh'
}


export class GroupResults extends React.Component {
    static service;
    topChoice;
    constructor(props) {
        super(props);
        this.state = {
            zoom: 13,
            maptype: 'roadmap',
            place_formatted: '',
            place_id: '',
            place_location: ''
        }
    }


    componentDidMount() {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 39.7684, lng: -86.1581 },
            zoom: 8,
            mapTypeId: 'roadmap',
            types: ['lodging']
        });
        window.map = this.map = map;
        map.addListener('zoom_changed', () => {
            this.setState({
                zoom: map.getZoom(),
            });
        });

        map.addListener('maptypeid_changed', () => {
            this.setState({
                maptype: map.getMapTypeId(),
            });
        });
        navigator.geolocation.getCurrentPosition(success => {

            this.location = {
                lat: success.coords.latitude,
                lng: success.coords.longitude
            }
            this.getData();
        });

        let inputNode = document.getElementById('pac-input');
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);


        window.infowindow = new window.google.maps.InfoWindow();
    }
    getData() {



        this.props.dispatch(groupInfo())
            .then(() => {
                let group;
                if (this.props.groupData) {
                    group = this.props.groupData.find(g => {
                        if (g._id === this.props.groupId) {
                            return true;
                        }
                    })
                }


                let voteInfo;
                if (group) {
                    voteInfo = group.votes;
                }


                let categoryArray = {};
                if (voteInfo) {
                    for (let i = 0; i < voteInfo.length; i++) {
                        let cat = voteInfo[i].categories;
                        for (let j = 0; j < cat.length; j++) {
                            let catLoop = cat[j];
                            if (categoryArray[catLoop]) {
                                categoryArray[catLoop]++
                            } else {
                                categoryArray[catLoop] = 1;
                            }
                        }
                    }
                }


                let sortedArray;
                if (categoryArray) {
                    sortedArray = [];
                    for (var category in categoryArray) {
                        sortedArray.push([category, categoryArray[category]]);
                    }
                    sortedArray.sort(function (a, b) {
                        return b[1] - a[1];
                    })
                }



                if (sortedArray.length > 0) {

                this.topChoice = sortedArray[0][0];
                    this.searchApi();
                }
            })

    }

    createMarker(place) {
        var marker = new window.google.maps.Marker({
            map: this.map,
            position: place.geometry.location
        });

        window.google.maps.event.addListener(marker, 'click', function () {
            window.infowindow.setContent(
                `<p>${place.name}</p>
                <p>${place.vicinity}</p>
                <p>Rating: ${place.rating}/5</p>
            `);
            window.infowindow.open(window.map, this);
        });
    }

    callback(results, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            let bounds = new window.google.maps.LatLngBounds();
            for (var i = 0; i < results.length; i++) {
                this.createMarker(results[i]);
                bounds.extend(results[i].geometry.location);
            }
            this.map.fitBounds(bounds);

        }
    }

    searchApi() {
        let service = new window.google.maps.places.PlacesService(this.map);
        service.nearbySearch({
            location: this.location,
            radius: 5000,
            type: ['restaurant'],
            keyword: this.topChoice
        }, this.callback.bind(this));
    }

    render() {


        return (
            <div>
                <div className="result-section">
                    <Paper style={style} zDepth={2} >
                        <p className="top-choice">Current Top Choice: {this.topChoice}</p>
                    </Paper>
                </div>
                <div className="map-section" style={mapStyle} >
                    <div id="map" style={mapStyle}>

                    </div>
                </div>
            </div>
        );
    };
}


const mapStateToProps = state => {
    return {
        groupData: state.friendsReducer.groupData
    };
};


export default connect(mapStateToProps)(GroupResults);


