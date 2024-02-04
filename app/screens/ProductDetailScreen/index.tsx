import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Header} from './components/Header';
import {ProductImageContainer} from './components/ProductImageContainer';
import {Itemdetails} from './components/ItemDetails';
import {ColorFamilyList} from './components/ColorFamilyList';
import {SelectSizeAndQuantityComp} from './components/SelectSizeAndQuantityComp';
import Icon, {Icons} from '../../utils/icons';
import {appColors} from '../../utils/appColors';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const ProductDetailScreen = ({route}) => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);

  const [cartItems, setCartItems] = useState([]);
  const ITEM = route?.params?.item;

  const addToCart = item => {
    const found = cartItems.some(el => el.id === item.id);
    if (!found) {
      setCartItems([...cartItems, item]);
    }
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Header onPressBack={onPressBack} />
      <ScrollView>
        <ProductImageContainer params={ITEM} />
        <View style={{marginHorizontal: 20}}>
          <Itemdetails params={ITEM} />
          <ColorFamilyList />
          <SelectSizeAndQuantityComp />
          <View style={{flexDirection: 'row', marginVertical: 26, top: 20}}>
            <View>
              <Icon
                name={'chatbubble-ellipses'}
                type={Icons?.Ionicons}
                color={appColors?.primary}
              />
              <Text style={{fontSize: 18, fontWeight: 400}}>{'Chat'}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => addToCart(ITEM)}
              style={{
                alignItems: 'center',
                height: 50,
                width: 130,
                borderWidth: 1,
                borderColor: appColors?.primary,
                justifyContent: 'center',
                borderRadius: 25,
                marginLeft: 18,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: appColors?.black,
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation?.navigate('MyCart', {cartItems, setCartItems});
              }}
              style={{
                alignItems: 'center',
                height: 50,
                width: 130,
                backgroundColor: appColors?.primary,
                justifyContent: 'center',
                borderRadius: 25,
                marginLeft: 18,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: appColors?.white,
                }}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
