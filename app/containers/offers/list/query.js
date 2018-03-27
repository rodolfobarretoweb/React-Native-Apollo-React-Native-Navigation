import gql from 'graphql-tag';

export default gql`
  {
    viewer {
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
