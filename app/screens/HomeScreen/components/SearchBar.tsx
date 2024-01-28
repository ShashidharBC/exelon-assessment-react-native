import {Pressable, TextInput, View} from 'react-native';
import styles from '../styles';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';

export const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <Icon
          name={'menu'}
          type={Icons?.Feather}
          color={'black'}
          style={{paddingLeft: 8}}
        />
        <Icon
          name={'search'}
          type={Icons?.Feather}
          color={'black'}
          style={{paddingLeft: 8}}
        />
        <TextInput
          style={styles.searchInput}
          value={''}
          placeholder={'What are you Looking For ?'}
        />
        <Icon
          name={'scan'}
          type={Icons?.Ionicons}
          color={'black'}
          style={{paddingRight: 8}}
        />
      </View>
      <Pressable
        //   onPress={onRightIconPress&&onRightIconPress}
        style={{
          borderRadius: 26,
          width: 54,
          height: 54,
          backgroundColor: appColors.black,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 8,
        }}>
        <Icon
          name={'equalizer'}
          color={appColors.white}
          type={Icons?.SimpleLineIcons}
        />
      </Pressable>
    </View>
  );
};
