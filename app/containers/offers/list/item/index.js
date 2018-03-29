import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import truncate from 'lodash/truncate';
import { getContainer } from 'app/containers';
import Card from 'app/components/card';
import { formatCurrency } from 'app/utils/currency';
import Style from './style';

class Item extends PureComponent {
  onPress = () => {
    this.props.navigator.push({
      screen: getContainer('OffersDetails'),
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
  price: PropTypes.number.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Item;
