import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import {IVideoPost} from '../../types';
import Player from './Player/Player';
import VideoContent from './VideoContent/VideoContent';
import FeedbackButtons from '../FeedbackButtons/FeedbackButtons';
import useGetDimension from '../../hooks/useGetDimension';

interface IProps {
  post: IVideoPost;
}

const VideoPost = ({post}: IProps) => {
  const [paused, setPaused] = useState(false);
  const playIconScale = useRef(new Animated.Value(0)).current;
  const {title, content} = post;
  const {width, withoutBottomTabHeight} = useGetDimension();

  const togglePause = () => {
    setPaused(!paused);
  };

  return (
    <TouchableWithoutFeedback onPress={togglePause}>
      <View style={[styles.container, {width, height: withoutBottomTabHeight}]}>
        <Player paused={paused} playIconScale={playIconScale} />

        <View style={styles.bottomContainer}>
          <VideoContent title={title} content={content} />
          <FeedbackButtons direction="column" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actionSection: {
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default VideoPost;
