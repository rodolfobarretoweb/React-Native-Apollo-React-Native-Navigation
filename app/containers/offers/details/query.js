import gql from 'graphql-tag';

export default gql`
  mutation makePurchase($offerId: ID!) {
    purchase( offerId: $offerId) {
      success,
      errorMessage,
      customer {
        balance
      }
    }
  }
`;
