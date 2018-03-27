import { AsyncStorage } from 'react-native';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { END_POINT, TOKEN } from '../configs/env';

const httpLink = createHttpLink({ uri: END_POINT });

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({ headers: {  authorization: `Bearer ${TOKEN}` } });
  return forward(operation);
});

export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache().restore(AsyncStorage)
});
