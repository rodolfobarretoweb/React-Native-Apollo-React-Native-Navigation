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
    color: '#333'
  },

  headerPriceLabel: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#782698'
  },

  contentContainer: {
    padding: 10
  },

  contentDescriptionLabel: {
    fontSize: 16,
    color: '#333'
  },

  bottomBarContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 0.1 },
    shadowOpacity: 0.3,
    elevation: 3
  },

  bottomBarBalanceContainer: {
    flex: 1,
    marginLeft: 10
  },

  bottomBarButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#782698',
    borderRadius: 10
  },

  bottomBarButtonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  bottomBarbalanceLabel: {
    textAlign: 'right',
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
