import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

class Card extends PureComponent {
  render() {
    return(
      <View>{ this.props.children }</View>
    );
  }
}

Card.propTypes = {
  children: PropTypes.element.isRequired
};

export default Card;
