import { Navigation } from 'react-native-navigation';
import { NAMESPACE } from '../configs/constants';
import OffersList from './offers/list';
import OffersDetails from './offers/details';

export function registerContainers() {
  Navigation.registerComponent(`${NAMESPACE}.OffersList`, () => OffersList);
  Navigation.registerComponent(`${NAMESPACE}.OffersDetails`, () => OffersDetails);
};
