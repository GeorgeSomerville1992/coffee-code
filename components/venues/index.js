'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  appRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import Header from '../common/header';
import styles from '../styles/common-styles.js';
import PostCodeSearch from './search.js';
import { getFoursquareVenues, getYelpVenues, getGooglePlacesVenues } from '../../actions'
import get from 'lodash/get'


import YelpApi from '../../api/yelp.js'
import FourSquareApi from '../../api/foursquare.js';
import GooglePlacesApi from '../../api/google-places.js';
import Geocoder from 'react-native-geocoding';

Geocoder.setApiKey('AIzaSyDAyIASv96bjGFza6BhlEhpXDzglJmBPHM'); // use a valid API key

export class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
    this.getVenues = this.getVenues.bind(this)
    this.searchVenues = this.searchVenues.bind(this)
  }

  componentWillMount() {
    this.setState({
      loaded: true
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = false
    if (get(nextProps, 'googlePlacesVenues') && get(nextProps, 'yelpVenues') && get(nextProps, 'foursquareVenues')) {
      shouldUpdate = true
    }
    return shouldUpdate
  }

  getVenues(location) {
    let locationString = location.lat + ", " + location.lng
    let venues = []


    this.props.getYelpVenues(locationString)
    this.props.getFoursquareVenues(locationString)
    this.props.getGooglePlacesVenues(locationString)

    // GooglePlacesApi(locationString).then((data) => {
    //   console.log('data from google places', data)
    //   venues.push(data)
    // }, (error) => {
    //   console.log('error', error)
    // })
    // blank becuase of raise condirion
    // needs to go into a promise????
    // construct some sort of promise ting
    // or add redux into the mix? shall we straight go in to redux
  }
  // external helper libary

  searchVenues(postcode) {
    let that = this

    Geocoder.getFromLocation(postcode).then(
      json => {
        var location = json.results[0].geometry.location;
        that.getVenues(location)
      },
      error => {
        alert(error);
      }
    );
  }

  render() {
    const { foursquareVenues, yelpVenues, googlePlacesVenues } = this.props
    console.log('data foursquare Venues ===>', foursquareVenues)
    console.log('data yelp =====>', yelpVenues)
    console.log('goooglePlacesVenues ======>', googlePlacesVenues)
    // flesh out venue

    return (
      <View style={styles.container}>
        <Header text="Venues" loaded={this.state.loaded}  />
        <PostCodeSearch searchVenues={this.searchVenues} />
        <View style={venueStyles.body}>

          <Text> hello </Text>
        </View>
      </View>
    )
  }
}

const venueStyles = StyleSheet.create({
  body: {
    flex: 9,
    marginLeft: 3,
    marginRight: 3,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
    foursquareVenues: state.foursquareVenues,
    yelpVenues: state.yelpVenues,
    googlePlacesVenues: state.googlePlacesVenues,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFoursquareVenues: (locationString) => {
      dispatch(getFoursquareVenues(locationString))
    },
    getYelpVenues: (locationString) => {
      dispatch(getYelpVenues(locationString))
    },
    getGooglePlacesVenues: (locationString) => {
      dispatch(getGooglePlacesVenues(locationString))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Venues)
