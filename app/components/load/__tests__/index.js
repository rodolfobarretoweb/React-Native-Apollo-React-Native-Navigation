import React from 'react';
import { StyleSheet } from 'react-native';
import renderer from 'react-native-test-utils';
import checkPropTypes from 'check-prop-types';
import Load from '../index';

describe('Load component', () => {
  it('renders snapshot correctly', () => {
    const load = renderer(<Load />);
    expect(load.toJSON()).toMatchSnapshot();
  });

  it('fails with wrong prop type on `show` prop', () => {
    expect(
      checkPropTypes(Load.propTypes, { show: '' }, 'prop', 'Load')
    ).toContain('Invalid prop `show` of type `string` supplied to `Load`, expected `boolean`.');
  });

  it('fails with wrong prop type on `style` prop', () => {
    expect(
      checkPropTypes(Load.propTypes, { style: { invalidProp: '' } }, 'prop', 'Load')
    ).toMatch('Failed prop type: Invalid props.style key `invalidProp` supplied to `Load`.');
  });

  it('accepts custom style', () => {
    const style = StyleSheet.create({ load: { position: 'absolute' } });
    const load = renderer(
      <Load style={style.load} />
    );
    expect(load.toJSON()).toMatchSnapshot();
  });

  describe('when `show` prop is false', () => {
    it('returns an empty view', () => {
      const load = renderer(<Load show={false} />);
      expect(load.toJSON()).toMatchSnapshot();
    });
  });
});
