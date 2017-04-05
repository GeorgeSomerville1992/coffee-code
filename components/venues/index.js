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
import { getFoursquareVenues } from '../../actions'

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

  getVenues(location) {
    let locationString = location.lat + ", " + location.lng
    let venues = []

    YelpApi(locationString).then((data) => {
      console.log('data from yelp', data)
      venues.push(data)
      this.setState({ loaded: true })
    }, (error) => {
      console.log('error', error)
    })
    this.props.getFoursquareVenues(locationString)

    // FourSquareApi(locationString).then((data) => {
    //   console.log('datat from fourswquare', data)
    //   venues.push(data)
    //   this.setState({ loaded: true })
    // }, (error) => {
    //   console.log('error', error)
    // })


    GooglePlacesApi(locationString).then((data) => {
      console.log('data from google places', data)
      venues.push(data)
    }, (error) => {
      console.log('error', error)
    })
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
    const { foursquareVenues } = this.props

    return (
      <View style={styles.container}>
        <Header text="Venues" loaded={this.state.loaded}  />
        <PostCodeSearch searchVenues={this.searchVenues} />
        <View style={styles.body}>
          <Text> hello </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { foursquareVenues: state.foursquareVenues }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFoursquareVenues: (locationString) => {
      dispatch(getFoursquareVenues(locationString))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Venues)
