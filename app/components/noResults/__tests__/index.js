import React from 'react';
import renderer from 'react-native-test-utils';
import checkPropTypes, { assertPropTypes } from 'check-prop-types';
import NoResults from '../index';

describe('NoResults component', () => {
  it('renders snapshot correctly', () => {
    const noResults = renderer(<NoResults text="No results" />);
    expect(noResults.toJSON()).toMatchSnapshot();
  });

  it('fails with wrong prop type on `text` prop', () => {
    expect(
      checkPropTypes(NoResults.propTypes, { text: false }, 'prop', 'NoResults')
    ).toContain('Invalid prop `text` of type `boolean` supplied to `NoResults`, expected `string`.');
  });
});
