import {
  Animated,
  LayoutChangeEvent,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import style from './style';
import {useRef, useState} from 'react';

interface IProps {
  title: string;
  content: string;
}

const VideoContent = ({title, content}: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const contentHeight = useRef(new Animated.Value(100)).current;
  const containerWidthRef = useRef<number | null>(null);

  const onContainerLayout = (event: LayoutChangeEvent) => {
    const containerWidth = event.nativeEvent.layout.width;
    containerWidthRef.current = containerWidth;
    //TODO text 가 영역을 넘어갈때의 값을 정확히 가져오는 방법으로 수정필요
    setShowMore(containerWidth < content.length * 8);
  };

  const toggleContent = () => {
    Animated.timing(contentHeight, {
      toValue: expanded ? 100 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  return (
    <>
      <Animated.View style={[style.contentSection, {height: contentHeight}]}>
        <Text style={style.title}>{title}</Text>
        <View>
          <Text
            style={style.content}
            onLayout={onContainerLayout}
            numberOfLines={expanded ? 0 : 1}
            ellipsizeMode="tail">
            {content}
          </Text>
        </View>
      </Animated.View>
      {showMore && (
        <TouchableWithoutFeedback onPress={toggleContent}>
          <Text style={style.more}>{expanded ? '숨기기' : '자세히 보기'}</Text>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default VideoContent;
