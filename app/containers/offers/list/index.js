import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import query from './query';

class List extends PureComponent {
  render() {
    return null;
  }
}

export default graphql(query)(List);
