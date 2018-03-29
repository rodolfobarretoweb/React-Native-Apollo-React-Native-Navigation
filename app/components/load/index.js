import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, ViewPropTypes } from 'react-native';
import Style from './style';

class Load extends PureComponent {
  render() {
    const { show, style, ...otherProps } = this.props;

    if(!show) return <View {...otherProps} />;

    return(
      <View {...otherProps} style={[Style.container, style]}>
        <ActivityIndicator
          size="large"
          color="#782698"
          style={Style.component}
        />
      </View>
    );
  }
}

Load.defaultProps = {
  style: {},
  show: true
};

Load.propTypes = {
  show: PropTypes.bool,
  style: ViewPropTypes.style // eslint-disable-line
};

export default Load;
