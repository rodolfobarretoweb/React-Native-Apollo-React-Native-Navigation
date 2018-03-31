import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import I18n from 'react-native-i18n';
import { graphql } from 'react-apollo';
import get from 'lodash/get';
import NoResults from 'app/components/noResults';
import Load from 'app/components/load';
import { formatCurrency } from 'app/utils/currency';
import query from './query';
import Item from './item';
import Style from './style';

export class List extends PureComponent {
  static formatBalance(value) {
    return formatCurrency({ value });
  }

  item = ({ item }) => {
    const { navigator, data: { viewer: { balance } } } = this.props;
    return <Item {...item} balance={balance} navigator={navigator} />;
  };

  renderNoResults = () => <NoResults text={I18n.t('offers.list.noResults')} />

  keyExtractor = item => item.id;

  render() {
    const data = get(this.props, 'data', {});

    return (
      <View style={Style.container}>
        <View style={Style.headerContainer}>
          <Text style={Style.headerLabel}>
            {
              I18n.t('offers.list.balance', {
                value: List.formatBalance(get(data, 'viewer.balance', 0))
              }
            )}
          </Text>
        </View>

        {
          data.loading ?
            <View style={Style.loadContainer}><Load /></View>
          :
            <FlatList
              contentContainerStyle={Style.contentContainer}
              data={data.viewer.offers}
              keyExtractor={this.keyExtractor}
              initialNumToRender={20}
              renderItem={this.item}
              ListEmptyComponent={this.renderNoResults}
            />
        }
      </View>
    );
  }
}

export default graphql(query)(List);
