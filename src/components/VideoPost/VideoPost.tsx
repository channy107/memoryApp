import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import {IVideoPost} from '../../types';
import Player from './Player/Player';
import VideoContent from './VideoContent/VideoContent';
import FeedbackButtons from '../FeedbackButtons/FeedbackButtons';

interface IProps {
  post: IVideoPost;
}

const width = Dimensions.get('window').width;
//TODO bottom tab 높이를 동적으로 가져오는 방법으로 수정필요
const height = Dimensions.get('window').height - 68;

const VideoPost = ({post}: IProps) => {
  const [paused, setPaused] = useState(false);
  const playIconScale = useRef(new Animated.Value(0)).current;
  const {title, content} = post;

  const togglePause = () => {
    setPaused(!paused);
  };

  return (
    <TouchableWithoutFeedback onPress={togglePause}>
      <View style={styles.container}>
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
  container: {
    width: width,
    height: height,
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
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
