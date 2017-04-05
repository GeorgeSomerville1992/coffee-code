import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  View,
  AsyncStorage,
  Navigator,
  Text,
  ListView
} from 'react-native';
import ListItem from './common/list-item'
import styles from './styles/common-styles.js'
import Header from './common/header'

class LibraryList extends Component {
  constructor(props) {
    super(props);
    this.setState({loaded: false})
  }

  componentWillMount() {
    var copy = Object.assign({}, this.props.libraries)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
    // works via array syntax
  }
  
  renderRow(library) {
    return <ListItem library={library} />
  }

  render() {
    console.log('datadource', this.dataSource)
    return (
      <View style={styles.container}>
        <Header text="List" />
        <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libaries }
};

export default connect(mapStateToProps)(LibraryList)
// currying
