import {Dimensions} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const useGetDimension = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const withoutBottomTabHeight = height - tabBarHeight;
  return {width, height, withoutBottomTabHeight};
};

export default useGetDimension;
