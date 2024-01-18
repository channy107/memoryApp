import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Post from '../components/Post/Post';
import {posts} from '../../mocks/data';

function Home() {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default Home;
