import { Navigation } from 'react-native-navigation';
import { registerContainers, getContainer } from './app/containers';

registerContainers();

Navigation.startSingleScreenApp({
  screen: {
    screen: getContainer('OffersList')
  }
});
