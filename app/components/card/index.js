import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import Style from './style';

class Card extends PureComponent {
  render() {
    const { children, ...otherProps } = this.props;

    return (
      <TouchableHighlight underlayColor="transparent" style={Style.container} {...otherProps}>
        { this.props.children }
      </TouchableHighlight>
    );
  }
}

Card.propTypes = {
  children: PropTypes.element.isRequired
};

export default Card;
