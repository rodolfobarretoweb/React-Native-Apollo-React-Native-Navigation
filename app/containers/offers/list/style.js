import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: '#782698',
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },

  headerLabel: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent'
  },

  backgroundContainer: {
    position: 'absolute',
    right: 0,
    top: 0
  },

  contentContainer: {
    padding: 10
  }
});
