import fetch from 'jest-fetch-mock';

export default () => {
  global.fetch = jest.mock('node-fetch', fetch);
};
