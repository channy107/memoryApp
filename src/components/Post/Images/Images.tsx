import {useState} from 'react';
import {
  ScrollView,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import style from './style';

const width = Dimensions.get('window').width;

interface IProps {
  imageUrls: string[];
}

const Images = ({imageUrls}: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          style={style.slider}>
          {imageUrls.map((imageUrl, index) => (
            <Image key={index} source={{uri: imageUrl}} style={style.image} />
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
