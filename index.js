import I18n from 'react-native-i18n';
import { Navigation } from 'react-native-navigation';
import { registerContainers, getContainer } from './app/containers';
import { NAVIGATION_DEFAULT_THEME } from './app/configs/theme';
import langs from './app/langs';

registerContainers();

// Load langs to entire application
I18n.fallbacks = true;
I18n.translations = langs;
I18n.defaultLocale = 'en';

Navigation.startSingleScreenApp({
  screen: {
    screen: getContainer('OffersList'),
    title: I18n.t('offers.list.title'),
    navigatorStyle: NAVIGATION_DEFAULT_THEME
  },

  appStyle: {
    hideBackButtonTitle: true
  }
});
