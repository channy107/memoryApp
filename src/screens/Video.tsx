import {SafeAreaView, FlatList} from 'react-native';
import VideoPost from '../components/VideoPost/VideoPost';
import {videoPosts} from '../../mocks/data';
import useGetDimension from '../hooks/useGetDimension';

function Video() {
  const {withoutBottomTabHeight} = useGetDimension();
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
        snapToInterval={withoutBottomTabHeight}
        decelerationRate={'fast'}
      />
    </SafeAreaView>
  );
}

export default Video;
