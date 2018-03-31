import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import I18n from 'react-native-i18n';
import truncate from 'lodash/truncate';
import { getContainer } from 'app/containers';
import Card from 'app/components/card';
import { formatCurrency } from 'app/utils/currency';
import { NAVIGATION_DEFAULT_THEME } from 'app/configs/theme';
import Style from './style';

class Item extends PureComponent {
  onPress = () => {
    this.props.navigator.push({
      screen: getContainer('OffersDetails'),
      title: I18n.t('offers.details.title'),
      navigatorStyle: NAVIGATION_DEFAULT_THEME,
      passProps: { ...this.props }
    });
  };

  render() {
    const {
      price, product: { name, description, image }
    } = this.props;

    return(
      <Card onPress={this.onPress}>
        <View>
          <Image source={{ uri: image }} style={Style.image} />
          <Text style={Style.titleLabel}>{name}</Text>
          <Text style={Style.priceLabel}>{formatCurrency({ value: price })}</Text>
          <Text style={Style.descriptionLabel}>{truncate(description, { length: 100 })}</Text>
        </View>
      </Card>
    );
  }
}

Item.propTypes = {
  navigator: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired, // eslint-disable-line
  balance: PropTypes.number.isRequired, // eslint-disable-line
  price: PropTypes.number.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Item;
