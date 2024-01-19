import {useState} from 'react';
import {
  ScrollView,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
  Text,
} from 'react-native';
import style from './style';
import useGetDimension from '../../../hooks/useGetDimension';

interface IProps {
  imageUrls: string[];
}

const Images = ({imageUrls}: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {width, height} = useGetDimension();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };
  return (
    <>
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          style={[style.slider, {width, height: height * 0.6}]}>
          {imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              source={{uri: imageUrl}}
              style={[style.image, {width, height: height * 0.6}]}
            />
          ))}
        </ScrollView>
      </View>
      {imageUrls.length > 1 && (
        <View style={style.paginationWrapper}>
          {imageUrls.map((_, index) => (
            <View
              key={index}
              style={[
                style.dot,
                index === activeIndex ? style.dotActive : style.dotInactive,
              ]}
            />
          ))}
        </View>
      )}
      {imageUrls.length > 1 && (
        <View style={style.imageCounterContainer}>
          <Text style={style.imageCounter}>
            {activeIndex + 1}/{imageUrls.length}
          </Text>
        </View>
      )}
    </>
  );
};

export default Images;
