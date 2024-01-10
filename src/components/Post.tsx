import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  title: string;
  content: string;
  imgUrl: string;
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 170;

const Post = ({title, content, imgUrl}: IProps) => {
  return (
    <View style={styles.postContainer}>
      <Image source={{uri: imgUrl}} style={StyleSheet.absoluteFill} />

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="heart" size={28} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="comment" size={28} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: width,
    height: height,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
  },
  textContainer: {
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    marginBottom: 10,
  },
});

export default Post;
