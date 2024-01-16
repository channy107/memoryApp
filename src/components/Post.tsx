import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {IPost} from '../types';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  post: IPost;
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Post = ({post}: IProps) => {
  const {content, comments, likeCount, user, imageUrls} = post;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={{uri: 'https://source.unsplash.com/random'}}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          style={styles.slider}>
          {imageUrls.map((imageUrl, index) => (
            <Image key={index} source={{uri: imageUrl}} style={styles.image} />
          ))}
        </ScrollView>
      </View>
      {imageUrls.length > 1 && (
        <View style={styles.paginationWrapper}>
          {imageUrls.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === activeIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      )}
      {imageUrls.length > 1 && (
        <View style={styles.imageCounterContainer}>
          <Text style={styles.imageCounter}>
            {activeIndex + 1}/{imageUrls.length}
          </Text>
        </View>
      )}
      <View style={styles.icons}>
        <TouchableWithoutFeedback>
          <Icon name="heart" size={28} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Icon name="comment" size={28} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.like}>좋아요 {likeCount}개</Text>
        <View style={styles.content}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>{content}</Text>
        </View>
      </View>
      <View style={styles.commentContainer}>
        {comments.length > 0 ? (
          <Text>댓글 {comments.length} 모두 보기</Text>
        ) : (
          <View style={styles.comment}>
            <Image
              source={{uri: 'https://source.unsplash.com/random'}}
              style={styles.profileImage}
            />
            <TextInput focusable={false} placeholder="댓글 추가.." />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  profileImage: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  slider: {
    width: width,
    height: 380,
  },
  image: {
    width: width,
    height: 380,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 230,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: 'white',
  },
  dotInactive: {
    backgroundColor: 'gray',
  },
  imageCounterContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: 45,
    top: 100,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 15,
  },
  imageCounter: {
    color: 'white',
    fontSize: 14,
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
  contentContainer: {paddingHorizontal: 10},
  like: {
    fontSize: 16,
    paddingBottom: 5,
  },
  content: {
    flexDirection: 'row',
    gap: 5,
  },
  commentContainer: {
    padding: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default Post;
