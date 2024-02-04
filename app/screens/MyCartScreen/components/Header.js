import {View, Text, TouchableOpacity} from 'react-native';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';

export const Header = ({onPressBack}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 18,
          marginTop: 8,
        }}>
        <TouchableOpacity onPress={() => onPressBack && onPressBack()}>
          <Icon
            name={'arrow-left'}
            type={Icons?.Octicons}
            color={appColors?.black}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: appColors?.black,
            marginHorizontal: 16,
          }}>
          {'My Cart'}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text
          onPress={() => onPressBack && onPressBack()}
          style={{fontSize: 20, color: appColors?.primary, fontWeight: 'bold'}}>
          {'Cancel'}
        </Text>
      </View>
    </View>
  );
};
