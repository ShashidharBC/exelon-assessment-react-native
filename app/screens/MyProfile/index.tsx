import {Text, View} from 'react-native';
import Icon, {Icons} from '../../utils/icons';
import {appColors} from '../../utils/appColors';

export const MyProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 100,
      }}>
      <Icon
        name={'face-man-profile'}
        type={Icons?.MaterialCommunityIcons}
        color={appColors?.primary}
        size={40}
      />
      <Text
        style={{
          fontWeight: 'bold',
          color: appColors?.redOrange,
          fontSize: 26,
          margin: 6,
        }}>
        {'You are unknown!!!'}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: appColors?.darkGray,
          fontSize: 20,
        }}>
        {'Please Sign In Or Sign Up '}
      </Text>
    </View>
  );
};
