import {useState} from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';

export const CartItemsList = ({params}) => {
  const [count, setCount] = useState(0);
  const [heartIcon, setHeartIcon] = useState('hearto');
  const renderCartItems = item => {
    return (
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View>
          <Image
            source={item?.image}
            resizeMode="stretch"
            style={{width: 140, height: 160}}
          />
        </View>
        <View style={{marginHorizontal: 10}}>
          <View style={{marginBottom: 18}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: appColors?.black,
                marginBottom: 5,
              }}>
              {item?.title}
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 8}}>
              {'Size 40 | Color Family White & Gray'}
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: appColors?.black,
              }}>
              {item?.price}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 0.7,
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: appColors?.gray,
                borderRadius: 8,
              }}>
              <Text
                style={{fontSize: 40, marginHorizontal: 8}}
                onPress={() => setCount(count - 1)}>
                {'--'}
              </Text>
              <Text style={{fontSize: 24}}>{count}</Text>
              <Text
                style={{fontSize: 30, marginHorizontal: 8}}
                onPress={() => setCount(count + 1)}>
                {'+'}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: appColors?.gray,
                flex: 0.3,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                marginHorizontal: 8,
              }}>
              <TouchableOpacity
                onPress={() => setHeartIcon('heart')}
                activeOpacity={0.7}>
                <Icon
                  name={heartIcon}
                  type={Icons?.AntDesign}
                  color={appColors?.primary}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={params?.cartItems}
        renderItem={({item}) => renderCartItems(item)}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          columnGap: 14,
          marginHorizontal: 20,
          marginVertical: 16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
