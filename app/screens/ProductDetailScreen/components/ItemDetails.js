import {View, Text, TouchableOpacity} from 'react-native';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';
import {useState} from 'react';

export const Itemdetails = ({params}) => {
  const [heartIcon, setHeartIcon] = useState('hearto');
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'storefront'}
          type={Icons?.Ionicons}
          color={appColors?.primary}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: appColors?.primary,
            marginLeft: 8,
          }}>
          {'Muhsan Store'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: appColors?.black,
          }}>
          {params?.title}
        </Text>
        <TouchableOpacity onPress={() => setHeartIcon('heart')}>
          <Icon
            name={heartIcon}
            type={Icons?.AntDesign}
            color={appColors?.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 12}}>
        <Text style={{color: appColors?.primary, fontWeight: 'bold'}}>
          {params?.offerPtg}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{fontSize: 22, fontWeight: 500, color: appColors?.black}}>
            {params?.price}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name={'star'}
              type={Icons.AntDesign}
              color={appColors?.primary}
              size={18}
            />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: 500,
              }}>{`${params?.rating} > 1.5K Sold`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
