import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  LayoutChangeEvent,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import {IVideoPost} from '../types';

interface IProps {
  post: IVideoPost;
}

const width = Dimensions.get('window').width;
//TODO bottom tab 높이를 동적으로 가져오는 방법으로 수정필요
const height = Dimensions.get('window').height - 68;

const VideoPost = ({post}: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [paused, setPaused] = useState(false);
  const contentHeight = useRef(new Animated.Value(100)).current;
  const playIconScale = useRef(new Animated.Value(0)).current;
  const containerWidthRef = useRef<number | null>(null);
  const {title, content} = post;

  const onContainerLayout = (event: LayoutChangeEvent) => {
    const containerWidth = event.nativeEvent.layout.width;
    containerWidthRef.current = containerWidth;
    //TODO text 가 영역을 넘어갈때의 값을 정확히 가져오는 방법으로 수정필요
    setShowMore(containerWidth < content.length * 8);
  };

  const togglePause = () => {
    setPaused(!paused);
  };

  const toggleContent = () => {
    Animated.timing(contentHeight, {
      toValue: expanded ? 100 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  useEffect(() => {
    if (paused) {
      Animated.sequence([
        Animated.timing(playIconScale, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(playIconScale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [paused, playIconScale]);

  return (
    <TouchableWithoutFeedback onPress={togglePause}>
      <View style={styles.container}>
        <Video
          source={require('../../assets/video/video4.mov')}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          repeat
          paused={paused}
        />

        <Animated.View
          style={[
            styles.playIconContainer,
            {
              transform: [
                {
                  scale: playIconScale,
                },
              ],
            },
          ]}>
          {paused && <Icon name="play-circle" size={100} color="#FFF" />}
        </Animated.View>

        {/* <Image source={{uri: imgUrl}} style={StyleSheet.absoluteFillObject} /> */}
        <View style={styles.bottomContainer}>
          <Animated.View
            style={[styles.contentSection, {height: contentHeight}]}>
            <Text style={styles.title}>{title}</Text>

            <View>
              <Text
                style={styles.content}
                onLayout={onContainerLayout}
                numberOfLines={expanded ? 0 : 1}
                ellipsizeMode="tail">
                {content}
              </Text>
            </View>
          </Animated.View>
          {showMore && (
            <TouchableWithoutFeedback onPress={toggleContent}>
              <Text style={styles.more}>
                {expanded ? '숨기기' : '자세히 보기'}
              </Text>
            </TouchableWithoutFeedback>
          )}

          <View style={styles.actionSection}>
            <TouchableWithoutFeedback style={styles.button}>
              <Icon name="heart" size={28} color={'#fff'} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={styles.button}>
              <Icon name="comment" size={28} color={'#fff'} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  contentSection: {
    width: 240,
    paddingHorizontal: 20,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    fontSize: 16,
    color: '#fff',
  },
  more: {
    width: 80,
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  actionSection: {
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default VideoPost;
