import React, { PureComponent } from 'react';
import { TouchableHighlight, ScrollView, View, Image, Text } from 'react-native';
import I18n from 'react-native-i18n';
import Toast from '@remobile/react-native-toast';
import { formatCurrency } from 'app/utils/currency';
import { setValue as setCurrentBalance, getValue as getCurrentBalance } from '../utils/balance';
import Style from './style';

class Details extends PureComponent {
  state = { currentBalance: 0 };

  async componentWillMount() {
    this.props.navigator.setTitle({ title: I18n.t('offers.details.title') });

    const currentBalance = await getCurrentBalance();
    this.setState({ currentBalance });
  }

  static formatCurrency(value) {
    return formatCurrency({ value });
  }

  purchase = () => {
    const currentBalance = parseFloat(this.state.currentBalance) - this.props.price;

    if(currentBalance >= 0) {
      this.setState({ currentBalance });
      setCurrentBalance(currentBalance);
    } else {
      Toast.showLongCenter(I18n.t('offers.details.noCredit'));
    }
  }

  render() {
    const { price, product: { name, description, image } } = this.props;

    return (
      <ScrollView contentContainerStyle={Style.container}>
        <View>
          <Image source={{ uri: image }} style={Style.headerImage} />
          <Text style={Style.headerNameLabel}>{name}</Text>
          <Text style={Style.headerPriceLabel}>{Details.formatCurrency(price)}</Text>
        </View>

        <View style={Style.contentContainer}>
          <Text style={Style.contentDescriptionLabel}>{description}</Text>
        </View>

        <View style={Style.bottomBarContainer}>
          <View style={Style.bottomBarButtonContainer}>
            <TouchableHighlight
              onPress={this.purchase}
              style={Style.bottomBarButton}
              underlayColor="transparent"
            >
              <Text style={Style.bottomBarButtonLabel}>
                {I18n.t('offers.details.purchase')}
              </Text>
            </TouchableHighlight>
          </View>

          <View style={Style.bottomBarBalanceContainer}>
            <Text style={Style.bottomBarbalanceLabel}>
              {I18n.t('offers.details.currentBalance', { value: Details.formatCurrency(this.state.currentBalance) })}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;
