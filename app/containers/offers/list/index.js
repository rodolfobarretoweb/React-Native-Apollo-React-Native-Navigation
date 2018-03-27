import React, { PureComponent } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import I18n from 'react-native-i18n';
import { graphql } from 'react-apollo';
import Card from 'app/components/card';
import ShoppingBagImage from 'app/assets/images/offers/shopping-bag.png';
import query from './query';
import Style from './style';

class List extends PureComponent {
  componentWillMount() {
    this.props.navigator.setTitle({ title: I18n.t('offers.list.title') });
  }

  render() {
    return (
      <ScrollView>
        <View style={Style.headerContainer}>
          <Image source={ShoppingBagImage} style={Style.backgroundContainer} />
          <Text style={Style.headerLabel}>{ I18n.t('offers.list.warning') }</Text>
        </View>

        <View style={Style.contentContainer}>

        </View>
      </ScrollView>
    );
  }
}

export default graphql(query)(List);
