import React from 'react';
import renderer from 'react-native-test-utils';
import { List } from '../index';

describe('List container', () => {
  const data = {
    viewer: {
      offers: [
        {
          id: 'id',
          price: 10,
          product: {
            name: 'Product name',
            description: 'Description',
            image: 'image.jpg'
          }
        }
      ]
    }
  };

  const navigator = {
    setTitle: jest.fn()
  };

  it('renders snapshot correctly when is loading', () => {
    const item = renderer(<List navigator={navigator} data={{ loading: true }} />);
    expect(item.toJSON()).toMatchSnapshot();
  });

  it('renders snapshot correctly', () => {
    const item = renderer(<List navigator={navigator} data={data} />);
    expect(item.toJSON()).toMatchSnapshot();
  });
});
