import React from 'react';
import renderer from 'react-native-test-utils';
import { shallow } from 'enzyme';
import { Details } from '../index';

describe('Details container', () => {
  const props = {
    navigator: {
      setTitle: jest.fn()
    },

    balance: 1000,
    id: 'id',
    price: 10,
    product: {
      name: 'Product name',
      description: 'Description',
      image: 'image.jpg'
    }
  };


  it('renders snapshot correctly', () => {
    const item = renderer(<Details {...props} />);
    expect(item.toJSON()).toMatchSnapshot();
  });

  describe('when i make a purchase', () => {
    const simulate = () => {
      const wrapper = shallow(<Details {...props} />);
      const render = wrapper.dive();

      render.find('TouchableHighlight').simulate('Press');

      return render;
    };

    it('redirect with push method', () => {
      expect(simulate()).toMatchSnapshot();
    });
  });
});
