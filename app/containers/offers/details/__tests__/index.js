import React from 'react';
import renderer from 'react-native-test-utils';
import { shallow } from 'enzyme';
import { Details } from '../index';

describe('Details container', () => {
  const props = {
    navigator: { setTitle: jest.fn() },
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
    const simulate = params => {
      const wrapper = shallow(<Details {...params} />);
      const render = wrapper.dive();

      render.find('TouchableHighlight').simulate('Press');

      return render;
    };

    it('execute mutate method', () => {
      const newProps = {
        ...props, mutate: jest.fn()
      };

      simulate(newProps);
      expect(newProps.mutate).toHaveBeenCalled();
    });

    it('get an error message', async () => {
      const newProps = {
        ...props,
        mutate: jest.fn().mockResolvedValue({
          data: { purchase: { errorMessage: 'error' } }
        })
      };

      expect(simulate(newProps)).toMatchSnapshot();
    });

    it('get success status', async () => {
      const getNewProps = sucessResponse => (
        {
          ...props,
          mutate: jest.fn().mockResolvedValue({
            data: { purchase: { success: sucessResponse, customer: { balance: 100 } } }
          })
        }
      );

      expect(simulate(getNewProps(true))).toMatchSnapshot();
      expect(simulate(getNewProps(false))).toMatchSnapshot();
    });
  });
});
