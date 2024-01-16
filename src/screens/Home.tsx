import {FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Post from '../components/Post';

const posts = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'user1',
    },
    content: 'content test',
    likeCount: 3,
    imageUrls: [
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ],
    comments: [
      {id: '1', user: {id: '2', name: 'user2'}, content: 'comment test1'},
    ],
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'user2',
    },
    content: 'content test2',
    likeCount: 4,
    imageUrls: ['https://source.unsplash.com/random'],
    comments: [
      {id: '2', user: {id: '1', name: 'user1'}, content: 'comment test2'},
      {id: '3', user: {id: '3', name: 'user3'}, content: 'comment test3'},
    ],
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'user3',
    },
    content: 'content test3',
    likeCount: 0,
    imageUrls: [
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ],
    comments: [],
  },
  {
    id: '4',
    user: {
      id: '3',
      name: 'user3',
    },
    content: 'content test4',
    likeCount: 100,
    imageUrls: [
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ],
    comments: [
      {id: '4', user: {id: '1', name: 'user1'}, content: 'comment test4'},
      {id: '5', user: {id: '2', name: 'user2'}, content: 'comment tes5'},
    ],
  },
];

const height = Dimensions.get('window').height;

function Home() {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
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

export default Home;
