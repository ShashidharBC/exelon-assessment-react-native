import {Text} from 'react-native';
import {View} from 'react-native-animatable';
import Icon, {Icons} from '../../utils/icons';
import {appColors} from '../../utils/appColors';

export const NotificationScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 100,
      }}>
      <Icon
        name={'notifications'}
        type={Icons?.Ionicons}
        color={appColors?.primary}
        size={35}
      />
      <Text
        style={{
          fontWeight: 'bold',
          color: appColors?.redOrange,
          fontSize: 26,
          margin: 6,
        }}>
        {'No Notifications'}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: appColors?.darkGray,
          fontSize: 20,
        }}>
        {'Please wait for notifications'}
      </Text>
    </View>
  );
};
