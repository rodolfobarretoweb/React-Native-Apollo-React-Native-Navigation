import { Navigation } from 'react-native-navigation';
import { registerContainers } from './app/containers';
import { NAMESPACE } from './app/configs/constants';

registerContainers();

Navigation.startSingleScreenApp({
  screen: {
    screen: `${NAMESPACE}.OffersList`
  }
});
