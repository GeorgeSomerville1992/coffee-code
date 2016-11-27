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
    this.getVenus = this.getVenues
  }

  componentWillMount() {
    console.log('firing componenet will mount')
    // make an object and data returned from promises.
    // need to figure out how that will work..

    // move this to seperate function...



    this.setState({
      loaded: true
    });

    // then bang out the
    // and use search bar
  }

  getVenues(location) {
    let locationString = location.lat + ", " + location.lng
    console.log('getting venues', location)
    YelpApi(locationString).then((data) => {
      console.log('datta from yelp', data)
      this.setState({ loaded: true })
    }, (error) => {
      console.log('error', error)
    })

    FourSquareApi(locationString).then((data) => {
      console.log('datat from fourswquare', data)
      this.setState({ loaded: true })
    }, (error) => {
      console.log('error', error)
    })


    GooglePlacesApi([location.lat, location.lng]).then((data) => {
      console.log('data from google places', data)
    }, (error) => {
      console.log('error', error)
    })
  }

  searchVenus(postcode) {
    console.log('Im searching my venus', postcode);
    let that = this;
    Geocoder.getFromLocation(postcode).then(
      json => {
        var location = json.results[0].geometry.location;
        that.getVenues(location)
        console.log(location.lat + ", " + location.lng);
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
        <PostCodeSearch searchVenues={this.searchVenus}/>
        <View style={styles.body}>
          <Text> hello </Text>
        </View>
      </View>
    )
  }
}
