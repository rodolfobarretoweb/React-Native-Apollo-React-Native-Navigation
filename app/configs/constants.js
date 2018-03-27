import { Platform } from 'react-native';

export const NAMESPACE = 'NuContaMarketPlace';
export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export const TEST = 'test';
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = !IS_IOS;
export const DEFAULT_FONT_FAMILY = IS_IOS ? 'helvetica' : 'sans-serif';
