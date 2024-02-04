import {Image, View, Text} from 'react-native';

export const ProductImageContainer = ({params}) => {
  return (
    <View style={{alignItems: 'center', marginVertical: 10}}>
      <Image
        source={params?.image}
        style={{height: 300, width: 400}}
        resizeMode="stretch"
      />
    </View>
  );
};
