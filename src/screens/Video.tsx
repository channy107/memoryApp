import {SafeAreaView, FlatList, Dimensions} from 'react-native';
import VideoPost from '../components/VideoPost/VideoPost';

const posts = [
  {
    id: '1',
    title: 'test1',
    content:
      'test contentㅇㄹdfdfdfdfdfdfdfdfafsdfasdfasdfasdfasdfadsfgfgfgfgfgfgfgfgfgfgfgfgdㅇㄹㅇ',
    uri: '',
    user: {
      id: '1',
      name: 'username1',
    },
  },
  {
    id: '2',
    title: 'test2',
    content: 'test content2dfdfdfdfdfdfdfdfdf',
    uri: '',
    user: {
      id: '2',
      name: 'username2',
    },
  },
  {
    id: '3',
    title: 'test3',
    content: 'test contentdfddfdfdfdddd3',
    uri: '',
    user: {
      id: '3',
      name: 'username3',
    },
  },
  {
    id: '4',
    title: 'test4',
    content: 'test content4',
    uri: '',
    user: {
      id: '4',
      name: 'username4',
    },
  },
];

const height = Dimensions.get('window').height - 68;

function Video() {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
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
