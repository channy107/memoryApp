import {Text, TextInput, View} from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {IComment} from '../../../types';

interface IProps {
  comments: IComment[];
}

const Comment = ({comments}: IProps) => {
  return (
    <View style={style.commentContainer}>
      {comments.length > 0 ? (
        <Text>댓글 {comments.length} 모두 보기</Text>
      ) : (
        <View style={style.comment}>
          <UserProfileImage
            profileImage={require('../../../../assets/img/default_profile.png')}
            imageDimensions={30}
          />
          <TextInput focusable={false} placeholder="댓글 추가.." />
        </View>
      )}
    </View>
  );
};

export default Comment;
