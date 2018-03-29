import React from 'react';
import { View } from 'react-native';
import renderer from 'react-native-test-utils';
import checkPropTypes, { assertPropTypes } from 'check-prop-types';
import Card from '../index';

describe('Load component', () => {
  it('renders snapshot correctly', () => {
    const card = renderer(<Card><View /></Card>);
    expect(card.toJSON()).toMatchSnapshot();
  });

  it('fails without children prop', () => {
    expect(() => {
      assertPropTypes(Card.propTypes, { children: undefined }, 'prop');
    }).toThrow();
  });

  it('fails with wrong prop type on `show` prop', () => {
    expect(
      checkPropTypes(Card.propTypes, { children: '' }, 'prop', 'Card')
    ).toContain('Invalid prop `children` of type `string` supplied to `Card`, expected a single ReactElement.');
  });
});
