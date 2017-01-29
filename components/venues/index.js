'use strict';
import React, { Component } from 'react';
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

import YelpApi from '../../api/yelp.js'
import FourSquareApi from '../../api/foursquare.js';
import GooglePlacesApi from '../../api/google-places.js';
import Geocoder from 'react-native-geocoding';

Geocoder.setApiKey('AIzaSyDAyIASv96bjGFza6BhlEhpXDzglJmBPHM'); // use a valid API key

export default class Venues extends Component {
  // make a search bar and import it in here
  // for now just do request.
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

    // bind all of these to redux...
    // have a promise dispatcher
    let venues = []
    // push the data inside here...

    // each one will be passed through to a util function
    // then chucked back we simply ad this to our main hash

    //
    YelpApi(locationString).then((data) => {
      console.log('datta from yelp', data)
      venues.push(data)
      this.setState({ loaded: true })
    }, (error) => {
      console.log('error', error)
    })

    FourSquareApi(locationString).then((data) => {
      console.log('datat from fourswquare', data)
      venues.push(data)
      this.setState({ loaded: true })
    }, (error) => {
      console.log('error', error)
    })


    GooglePlacesApi(locationString).then((data) => {
      console.log('data from google places', data)
      venues.push(data)
    }, (error) => {
      console.log('error', error)
    })
    console.log('final data', venues)
    // blank becuase of raise condirion
    // needs to go into a promise????
    //  construct some sort of promise ting
  }
  // external helper libary
  combineResults() {

  }


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
