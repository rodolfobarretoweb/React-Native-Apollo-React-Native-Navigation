import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },

  headerImage: {
    width: '100%',
    height: 300
  },

  headerNameLabel: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold'
  },

  headerPriceLabel: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#782698'
  },

  contentContainer: {
    padding: 10
  },

  contentDescriptionLabel: {
    fontSize: 14,
    color: '#333'
  },

  buttonContainer: {
    flex: 1,
    padding: 10
  },

  button: {
    backgroundColor: '#782698',
    paddingVertical: 10,
    borderRadius: 5
  },

  buttonLabel: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },

  balanceLabel: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    textAlign: 'center'
  }
});
