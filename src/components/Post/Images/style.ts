import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  slider: {},
  image: {
    resizeMode: 'cover',
  },
  paginationWrapper: {
    position: 'relative',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: 'white',
  },
  dotInactive: {
    backgroundColor: 'gray',
  },
  imageCounterContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: 45,
    top: 80,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 15,
  },
  imageCounter: {
    color: 'white',
    fontSize: 14,
  },
});

export default style;
