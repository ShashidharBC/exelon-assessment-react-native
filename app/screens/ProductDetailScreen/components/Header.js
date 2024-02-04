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
          {'Details'}
        </Text>
      </View>
      <View
        style={{
          flex: 1.2,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 8,
        }}>
        <Icon
          name={'search'}
          type={Icons?.Feather}
          color={appColors?.black}
          style={{marginLeft: 22}}
        />
        <Icon
          name={'shopping-bag'}
          type={Icons?.FontAwesome}
          color={appColors?.black}
          style={{marginLeft: 22}}
        />
        <Icon
          name={'dots-three-horizontal'}
          type={Icons?.Entypo}
          color={appColors?.black}
          style={{marginLeft: 22}}
        />
      </View>
    </View>
  );
};
