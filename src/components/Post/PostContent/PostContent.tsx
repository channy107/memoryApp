import {Text, View} from 'react-native';
import style from './style';
import {IUser} from '../../../types';

interface IProps {
  likeCount: number;
  user: IUser;
  content: string;
}

const PostContent = ({likeCount, user, content}: IProps) => {
  return (
    <View style={style.contentContainer}>
      <Text style={style.like}>좋아요 {likeCount}개</Text>
      <View style={style.content}>
        <Text style={style.userName}>{user.name}</Text>
        <Text>{content}</Text>
      </View>
    </View>
  );
};

export default PostContent;
