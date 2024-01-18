import {Animated, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {useEffect} from 'react';

interface IProps {
  paused: boolean;
  playIconScale: Animated.Value;
}

const Player = ({paused, playIconScale}: IProps) => {
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
    <>
      <Video
        source={require('../../../../assets/video/video4.mov')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        repeat
        paused={paused}
      />

      <Animated.View
        style={[
          style.playIconContainer,
          {
            transform: [
              {
                scale: playIconScale,
              },
            ],
          },
        ]}>
        {paused && (
          <FontAwesomeIcon icon={faPlayCircle} size={90} color={'#fff'} />
        )}
      </Animated.View>
    </>
  );
};

export default Player;
