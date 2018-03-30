import React from 'react';
import renderer from 'react-native-test-utils';
import checkPropTypes, { assertPropTypes } from 'check-prop-types';
import { shallow } from 'enzyme';
import Item from '../index';

describe('Item component', () => {
  const defaultProps = {
    navigator: {},
    id: 'id',
    price: 10,
    balance: 1000,
    product: {
      name: 'Product name',
      description: 'Description',
      image: 'image.jpg'
    }
  };

  it('renders snapshot correctly', () => {
    const item = renderer(<Item {...defaultProps} />);
    expect(item.toJSON()).toMatchSnapshot();
  });

  it('fails without navigator prop', () => {
    expect(() => {
      assertPropTypes(Item.propTypes, { navigator: undefined }, 'prop');
    }).toThrow();
  });

  it('fails without id prop', () => {
    expect(() => {
      assertPropTypes(Item.propTypes, { id: undefined }, 'prop');
    }).toThrow();
  });

  it('fails without balance prop', () => {
    expect(() => {
      assertPropTypes(Item.propTypes, { balance: undefined }, 'prop');
    }).toThrow();
  });

  it('fails without price prop', () => {
    expect(() => {
      assertPropTypes(Item.propTypes, { price: undefined }, 'prop');
    }).toThrow();
  });

  it('fails without product name prop', () => {
    expect(() => {
      assertPropTypes(Item.propTypes, { product: { name: undefined } }, 'prop');
    }).toThrow();
  });

  it('fails without product description prop', () => {
    expect(() => {
      assertPropTypes(Item.propTypes, { product: { description: undefined } }, 'prop');
    }).toThrow();
  });

  it('fails without product image prop', () => {
    expect(() => {
      assertPropTypes(Item.propTypes, { product: { image: undefined } }, 'prop');
    }).toThrow();
  });

  it('fails with wrong prop type on `navigator` prop', () => {
    expect(
      checkPropTypes(Item.propTypes, { ...defaultProps, navigator: '' }, 'prop', 'Item')
    ).toContain('Invalid prop `navigator` of type `String` supplied to `Item`, expected instance of `Object`.');
  });

  it('fails with wrong prop type on `balance` prop', () => {
    expect(
      checkPropTypes(Item.propTypes, { ...defaultProps, balance: false }, 'prop', 'Item')
    ).toContain('Invalid prop `balance` of type `boolean` supplied to `Item`, expected `number`.');
  });

  it('fails with wrong prop type on `id` prop', () => {
    expect(
      checkPropTypes(Item.propTypes, { ...defaultProps, id: false }, 'prop', 'Item')
    ).toContain('Invalid prop `id` of type `boolean` supplied to `Item`, expected `string`.');
  });

  it('fails with wrong prop type on `price` prop', () => {
    expect(
      checkPropTypes(Item.propTypes, { ...defaultProps, price: false }, 'prop', 'Item')
    ).toContain('Invalid prop `price` of type `boolean` supplied to `Item`, expected `number`.');
  });

  it('fails with wrong prop type on `product name` prop', () => {
    expect(
      checkPropTypes(Item.propTypes, { ...defaultProps, product: { ...defaultProps.product, name: false } }, 'prop', 'Item')
    ).toContain('Invalid prop `product.name` of type `boolean` supplied to `Item`, expected `string`.');
  });

  it('fails with wrong prop type on `product description` prop', () => {
    expect(
      checkPropTypes(Item.propTypes, { ...defaultProps, product: { ...defaultProps.product, description: false } }, 'prop', 'Item')
    ).toContain('Invalid prop `product.description` of type `boolean` supplied to `Item`, expected `string`.');
  });

  it('fails with wrong prop type on `product image` prop', () => {
    expect(
      checkPropTypes(Item.propTypes, { ...defaultProps, product: { ...defaultProps.product, image: false } }, 'prop', 'Item')
    ).toContain('Invalid prop `product.image` of type `boolean` supplied to `Item`, expected `string`.');
  });

  describe('when press', () => {
    const props = {
      ...defaultProps,
      navigator: { push: jest.fn() }
    };

    const simulate = () => {
      const wrapper = shallow(<Item {...props} />);
      const render = wrapper.dive();

      render.find('TouchableHighlight').simulate('Press');

      return render;
    };

    it('redirect with push method', () => {
      simulate();
      expect(props.navigator.push).toHaveBeenCalled();
    });
  });
});
