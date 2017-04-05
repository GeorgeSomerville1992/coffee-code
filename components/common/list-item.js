import React, {Component, propTypes } from 'react'
import { connect } from 'react-redux'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './CardSection'
import * as actions from '../../actions'
console.log('actions!', actions)

class ListItem extends Component {

  renderDescription() {
    const { library, expanded } = this.props;

    console.log('renderingdescription', expanded, library.id)
    if (expanded) {
      return (
        <Text style={{ flex: 1 }}>
          hekkie {library.description}
        </Text>
      )
    }
  }

  render() {
    // const { titleStyle } = styles;
    // cool things going on here...
    const { id, title } = this.props.library;
    console.log('this.probs', this.props, id)
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text>{this.props.library.title} </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('this should fire on reducert', state)
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem)
