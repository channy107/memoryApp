import {SafeAreaView, FlatList, Dimensions} from 'react-native';

import Post from '../components/Post';

const posts = [
  {
    id: '1',
    title: 'test1',
    content:
      'test contentㅇㄹdfdfdfdfdfdfdfdfafsdfasdfasdfasdfasdfadsfgfgfgfgfgfgfgfgfgfgfgfgdㅇㄹㅇ',
    uri: '',
  },
  {
    id: '2',
    title: 'test2',
    content: 'test content2dfdfdfdfdfdfdfdfdf',
    uri: '',
  },
  {
    id: '3',
    title: 'test3',
    content: 'test contentdfddfdfdfdddd3',
    uri: '',
  },
  {
    id: '4',
    title: 'test4',
    content: 'test content4',
    uri: '',
  },
];

const height = Dimensions.get('window').height - 68;

function Video() {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <Post title={item.title} content={item.content} uri={item.uri} />
        )}
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
