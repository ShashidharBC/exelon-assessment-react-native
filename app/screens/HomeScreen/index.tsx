import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {SearchBar} from './components/SearchBar';
import {productList, productTypes} from '../../utils/StaticData';
import Icon, {Icons} from '../../utils/icons';
import {appColors} from '../../utils/appColors';
import {TrendingNowList} from './components/trendingNowList';

export const HomeScreen = ({navigation}) => {
  const renderProductList = item => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('ProductDetail', {item});
        }}>
        <View>
          <Image
            source={item?.image}
            style={{width: 160, height: 170}}
            resizeMode={'stretch'}
          />
        </View>
        <View>
          <View style={{marginBottom: 6}}>
            <Text
              style={{
                fontSize: 18,
                color: appColors?.black,
                fontWeight: 'bold',
              }}>
              {item?.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Icon
              name={'star'}
              type={Icons.AntDesign}
              color={appColors?.primary}
              size={16}
              style={{marginRight: 8}}
            />
            <Text>{item?.rating}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: appColors?.black,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              {item?.price}
            </Text>
            <Text
              style={{
                color: appColors?.primary,
                fontWeight: 'bold',
                fontSize: 18,
                marginRight: 10,
              }}>
              {item?.offerPtg}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = item => {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            paddingVertical: 12,
            paddingHorizontal: 14,
            borderRadius: 16,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <Icon
            name={item?.iconName}
            type={item?.iconType}
            color={item?.color}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            paddingTop: 6,
            fontWeight: 'bold',
          }}>
          {item?.name}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SearchBar />
      <ScrollView>
        <View style={styles.tabsContainer}>
          <FlatList
            data={productTypes}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              columnGap: 18,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <FlatList
            data={productList}
            renderItem={({item}) => renderProductList(item)}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              columnGap: 16,
              marginVertical: 16,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginHorizontal: 16}}>
          <TrendingNowList
            onPressTrendingNowListItem={item => {
              console.log('I AM PRESSED: ', item);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
