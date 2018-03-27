import { Navigation } from 'react-native-navigation';
import { ApolloProvider } from 'react-apollo';
import { NAMESPACE } from '../configs/constants';
import { client } from '../apis/apollo';

// Containers
import OffersList from './offers/list';
import OffersDetails from './offers/details';

const containers = {
  OffersList,
  OffersDetails
};

export function getContainer(name) {
  if(!Object.keys(containers).includes(name)) {
    throw new Error(
      `Container ${name} does not exist. Check app/containers/index.js
      for the list of available Containers`
    );
  }

  return `${NAMESPACE}.${name}`;
}

export function registerContainers() {
  Object.keys(containers).forEach(key => {
    Navigation.registerComponent(
      getContainer(key), () => containers[key], client.store, ApolloProvider, { client }
    );
  });
}
