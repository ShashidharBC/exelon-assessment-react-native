import {Text, View} from 'react-native';
import {appColors} from '../../../utils/appColors';

export const OrderSummaryComp = ({price}) => {
  const orderSummaryDetails = price => {
    const shippingFee = 60;
    return (
      <View style={{marginHorizontal: 16}}>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: appColors?.black,
              margin: 6,
            }}>
            {'Order Summary'}
          </Text>
        </View>
        <View style={{backgroundColor: appColors?.gray, borderRadius: 8}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: appColors?.black,
              margin: 10,
            }}>
            {`Items : 1`}
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: appColors?.black,
              margin: 10,
            }}>
            {`Amount : ${price}`}
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: appColors?.black,
              margin: 10,
            }}>
            {`Shipping fee : $${shippingFee}`}
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: appColors?.black,
              margin: 10,
            }}>
            {`Total : 000`}
          </Text>
        </View>
      </View>
    );
  };
  return <>{orderSummaryDetails(price)}</>;
};
