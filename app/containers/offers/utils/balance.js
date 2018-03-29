import { AsyncStorage } from 'react-native';

const KEY = 'currentBalance';

export function getValue() {
  return AsyncStorage.getItem(KEY);
}

export function setValue(value) {
  return AsyncStorage.setItem(KEY, JSON.stringify(value));
}