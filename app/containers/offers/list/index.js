import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import I18n from 'react-native-i18n';
import { graphql } from 'react-apollo';
import NoResults from 'app/components/noResults';
import Load from 'app/components/load';
import query from './query';
import Item from './item';
import Style from './style';

export class List extends PureComponent {
  componentWillMount() {
    this.props.navigator.setTitle({ title: I18n.t('offers.list.title') });
  }

  item = ({ item }) => (
    <Item {...item} navigator={this.props.navigator} />
  );

  keyExtractor = item => (item.id);

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.headerContainer}>
          <Text style={Style.headerLabel}>{ I18n.t('offers.list.warning') }</Text>
        </View>

        {
          this.props.data.loading ?
            <View style={Style.loadContainer}><Load /></View>
          :
            <FlatList
              contentContainerStyle={Style.contentContainer}
              data={this.props.data.viewer.offers}
              keyExtractor={this.keyExtractor}
              initialNumToRender={20}
              renderItem={this.item}
              ListEmptyComponent={<NoResults text={I18n.t('offers.list.noResults')} />}
            />
        }
      </View>
    );
  }
}

export default graphql(query)(List);
