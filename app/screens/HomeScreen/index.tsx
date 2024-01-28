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

export const HomeScreen = () => {
  const renderProductList = item => {
    return (
      <View>
        <View>
          <Image
            source={item?.image}
            style={{width: 140, height: 160}}
            resizeMode={'stretch'}
          />
        </View>
        <View>
          <View>
            <Text>{item?.title}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name={'star'}
              type={Icons.AntDesign}
              color={appColors?.primary}
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
              }}>
              {item?.offerPtg}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const renderItem = item => {
    return (
      <View>
        <TouchableOpacity
          style={{
            paddingVertical: 12,
            paddingHorizontal: 14,
            borderRadius: 16,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              paddingTop: 6,
              fontWeight: 'bold',
            }}>
            {item?.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <SearchBar />
      <ScrollView>
        <View style={styles.tabsContainer}>
          <FlatList
            data={productTypes}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.id}
            contentContainerStyle={{columnGap: 12}}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <FlatList
            data={productList}
            renderItem={({item}) => renderProductList(item)}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              columnGap: 14,
              marginHorizontal: 20,
              marginVertical: 16,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <TrendingNowList />
        </View>
      </ScrollView>
    </View>
  );
};
