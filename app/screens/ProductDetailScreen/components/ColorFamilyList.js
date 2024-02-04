import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {colorFamilyList} from '../../../utils/StaticData';
import {appColors} from '../../../utils/appColors';

export const ColorFamilyList = () => {
  const renderItem = item => {
    return (
      <View>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 16,
            backgroundColor: '#EEEEEE',
            alignItems: 'center',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: 'black',
              paddingTop: 6,
              fontWeight: 'bold',
            }}>
            {item?.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{marginTop: 10}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {'Color Family'}
      </Text>
      <FlatList
        data={colorFamilyList}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
        contentContainerStyle={{columnGap: 18, marginTop: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
