import {SafeAreaView, FlatList, Dimensions} from 'react-native';
import VideoPost from '../components/VideoPost/VideoPost';
import {videoPosts} from '../../mocks/data';

const height = Dimensions.get('window').height - 68;

function Video() {
  return (
    <SafeAreaView>
      <FlatList
        data={videoPosts}
        renderItem={({item}) => <VideoPost post={item} />}
        initialNumToRender={10}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        snapToInterval={height}
        decelerationRate={'fast'}
      />
    </SafeAreaView>
  );
}

export default Video;
