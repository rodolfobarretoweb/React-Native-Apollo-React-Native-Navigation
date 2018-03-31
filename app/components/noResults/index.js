import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import I18n from 'react-native-i18n';
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

NoResults.defaultProps = {
  text: I18n.t('shared.noResults')
};

NoResults.propTypes = {
  text: PropTypes.string
};

export default NoResults;
