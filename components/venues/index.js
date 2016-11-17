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

import YelpApi from '../../api/yelp.js'

export default class Venues extends Component {
  // make a search bar and import it in here
  // for now just do request.
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentWillMount() {
    console.log('firing componenet will mount')
    YelpApi().then((data) => {
      console.log('datttttaaa', data)
      this.setState({ loaded: true })
    }, (error) => {
      console.log('error', error)
    })
    // YelpApi().then((data) => {
    //   console.log('datttttaaa', data)
    // }, (error) => {
    //   console.log('error', error)
    // })
    // this.setState({
    //   loaded: true
    // });
    // then bang out the
    // and use search bar
  }

  render() {


    return (
      <View style={styles.container}>
        <Header text="Venues" loaded={this.state.loaded} />
        <View style={styles.body}>
          <Text> hello </Text>
        </View>
      </View>
    )
  }
}
