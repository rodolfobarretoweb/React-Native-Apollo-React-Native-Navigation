import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Style from './style';

class NoResults extends PureComponent {
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.label}>{this.props.text}</Text>
      </View>
    );
  }
}

NoResults.propTypes = {
  text: PropTypes.string.isRequired
};

export default NoResults;
