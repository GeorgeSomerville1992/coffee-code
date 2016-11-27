'use strict';
import React, { Component } from 'react';
import {
  appRegistry,
  AsyncStorage,
  TextInput
} from 'react-native';

import styles from '../styles/common-styles.js';
import _ from 'underscore';

export default class PostCodeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.method = _.debounce(this.method, 500);
  }

  componentWillMount() {

  }

  method(text) {
    // nice didn't have to do the currying
    // currying is for when we need to pass it 2 levels up top...
    console.log('the string length', text, text.length)
    if (text && text.length >= 5) {
      this.props.searchVenues(text);
    }
  }

  doSomething(text) {
    // Create the listener function

    this.setState({text});

    this.method(text);
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.doSomething(text)}
        value={this.state.text}
      />
    )
  }
}
