import {Text, View} from 'react-native';
import {IPost} from '../../types';
import UserProfileImage from './UserProfileImage/UserProfileImage';
import Images from './Images/Images';
import PostContent from './PostContent/PostContent';
import Comment from './Comment/Comment';
import style from './style';
import FeedbackButtons from '../FeedbackButtons/FeedbackButtons';

interface IProps {
  post: IPost;
}

const Post = ({post}: IProps) => {
  const {content, comments, likeCount, user, imageUrls} = post;

  return (
    <View style={style.container}>
      <View style={style.title}>
        <UserProfileImage
          profileImage={user.profileImage}
          imageDimensions={40}
        />
        <Text style={style.userName}>{user.name}</Text>
      </View>
      <Images imageUrls={imageUrls} />
      <FeedbackButtons direction="row" />
      <PostContent likeCount={likeCount} user={user} content={content} />
      <Comment comments={comments} />
    </View>
  );
};

export default Post;
