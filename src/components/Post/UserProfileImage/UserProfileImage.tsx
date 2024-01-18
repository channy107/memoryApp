import {View, Image, ImageSourcePropType} from 'react-native';
import style from './style';

interface IProps {
  profileImage: ImageSourcePropType;
  imageDimensions: number;
}

const UserProfileImage = ({imageDimensions, profileImage}: IProps) => {
  return (
    <View style={[style.userImageContainer, {borderRadius: imageDimensions}]}>
      <Image
        source={profileImage}
        style={[
          style.image,
          {
            width: imageDimensions,
            height: imageDimensions,
          },
        ]}
      />
    </View>
  );
};

export default UserProfileImage;
