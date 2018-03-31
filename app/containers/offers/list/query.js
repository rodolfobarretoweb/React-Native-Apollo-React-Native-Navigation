import gql from 'graphql-tag';

export default gql`
  {
    viewer {
      balance,
      offers {
        product {
          name,
          description,
          image
        },
        price,
        id
      }
    }
  }
`;
