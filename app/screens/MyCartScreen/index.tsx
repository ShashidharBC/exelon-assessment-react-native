import {Text, TouchableOpacity, View} from 'react-native';
import {Header} from './components/Header';
import {CartItemsList} from './components/CartItemsList';
import {OrderSummaryComp} from './components/OrderSummaryComp';
import {appColors} from '../../utils/appColors';
import Icon, {Icons} from '../../utils/icons';
import {useState} from 'react';

export const MyCartScreen = ({navigation, route}) => {
  const [deleteState, setDeleteStatus] = useState(route?.params);

  const onPressBack = () => {
    navigation.goBack();
  };
  const removeFromCart = itemId => {
    const updatedCart = deleteState?.cartItems?.filter(
      item => item.id !== itemId,
    );
    deleteState?.setCartItems(updatedCart);
  };
  const renderEmptyCartScreen = () => {
    if (deleteState === undefined) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 100,
          }}>
          <Icon
            name={'emoji-sad'}
            type={Icons?.Entypo}
            color={appColors?.primary}
            size={30}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: appColors?.redOrange,
              fontSize: 26,
              margin: 6,
            }}>
            {'Cart List is Empty'}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: appColors?.darkGray,
              fontSize: 20,
            }}>
            {'Please add items to your cart'}
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Header onPressBack={onPressBack} />
          <CartItemsList params={deleteState} />
          <OrderSummaryComp price={route?.params?.cartItems[0]?.price} />
          <View
            style={{
              flexDirection: 'row',
              marginTop: '50%',
            }}>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => {
                setDeleteStatus(undefined);
              }}
              style={{
                alignItems: 'center',
                height: 50,
                width: 130,
                borderWidth: 1,
                borderColor: appColors?.primary,
                justifyContent: 'center',
                borderRadius: 12,
                marginLeft: 18,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: appColors?.black,
                }}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: 'center',
                height: 50,
                width: 130,
                backgroundColor: appColors?.primary,
                justifyContent: 'center',
                borderRadius: 12,
                marginLeft: 18,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: appColors?.white,
                }}>
                Check Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  return <>{renderEmptyCartScreen()}</>;
};
