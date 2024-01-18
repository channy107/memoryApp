import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
});

export default style;
