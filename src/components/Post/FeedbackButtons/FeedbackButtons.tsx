import {TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faComment, faHeart} from '@fortawesome/free-solid-svg-icons';
import style from './style';

const FeedbackButtons = () => {
  return (
    <View style={style.feedback}>
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
