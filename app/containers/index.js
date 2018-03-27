import { Navigation } from 'react-native-navigation';
import { ApolloProvider } from 'react-apollo';
import { NAMESPACE } from '../configs/constants';
import { client } from '../apis/apollo';
import OffersList from './offers/list';
import OffersDetails from './offers/details';

export function registerContainers() {
  Navigation.registerComponent(`${NAMESPACE}.OffersList`, () => OffersList, client.store, ApolloProvider, { client });
  Navigation.registerComponent(`${NAMESPACE}.OffersDetails`, () => OffersDetails, client.store, ApolloProvider, { client });
};
