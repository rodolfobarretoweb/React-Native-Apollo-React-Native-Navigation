import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import I18n from 'react-native-i18n';
import { graphql } from 'react-apollo';
import { get, has } from 'lodash';
import NoResults from 'app/components/noResults';
import Load from 'app/components/load';
import { formatCurrency } from 'app/utils/currency';
import { setValue as setCurrentBalance, getValue as getCurrentBalance } from '../utils/balance';
import query from './query';
import Item from './item';
import Style from './style';

export class List extends PureComponent {
  state = { currentBalance: 0 };

  async componentWillMount() {
    this.props.navigator.setTitle({ title: I18n.t('offers.list.title') });

    const currentBalance = await getCurrentBalance();
    this.setState({ currentBalance });
  }

  async componentWillReceiveProps(nextProps) {
    let currentBalance = await getCurrentBalance();

    if(has(nextProps, 'data.viewer.balance') && !currentBalance) {
      currentBalance = nextProps.data.viewer.balance;
      this.setState({ currentBalance });
      setCurrentBalance(currentBalance);
    }
  }

  static formatBalance(value) {
    return formatCurrency({ value });
  }

  item = ({ item }) => (
    <Item {...item} navigator={this.props.navigator} />
  );

  renderNoResults = () => (
    <NoResults text={I18n.t('offers.list.noResults')} />
  )

  keyExtractor = item => (item.id);

  render() {
    const data = get(this.props, 'data', {});

    return (
      <View style={Style.container}>
        <View style={Style.headerContainer}>
          <Text style={Style.headerLabel}>
            { I18n.t('offers.list.balance', { value: List.formatBalance(this.state.currentBalance) }) }
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
