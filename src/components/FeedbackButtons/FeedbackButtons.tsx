import {TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons';

interface IProps {
  direction: 'column' | 'row';
}

const FeedbackButtons = ({direction}: IProps) => {
  return (
    <View style={[style.feedback, {flexDirection: direction}]}>
      <TouchableWithoutFeedback>
        <FontAwesomeIcon icon={faHeart} size={20} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <FontAwesomeIcon icon={faComment} size={20} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FeedbackButtons;
