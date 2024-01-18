import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
//TODO bottom tab 높이를 동적으로 가져오는 방법으로 수정필요
const height = Dimensions.get('window').height - 68;

const style = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  playIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
