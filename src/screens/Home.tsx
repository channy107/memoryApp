import {Dimensions, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Post from '../components/Post';

const posts = [
  {
    id: '1',
    title: 'test1',
    content: 'test content1',
    imgUrl: 'https://source.unsplash.com/random',
  },
  {
    id: '2',
    title: 'test2',
    content: 'test content2',
    imgUrl: 'https://source.unsplash.com/random',
  },
];

const height = Dimensions.get('window').height;

function Home() {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <Post
            title={item.title}
            content={item.content}
            imgUrl={item.imgUrl}
          />
        )}
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

export default Home;
