import {FlatList, Image, Text, View} from 'react-native';
import Icon, {Icons} from '../../../utils/icons';
import {appColors} from '../../../utils/appColors';
import {trendingNowList} from '../../../utils/StaticData';

export const TrendingNowList = () => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{'Trending Now'}</Text>
        <Icon
          name={'arrowright'}
          type={Icons.AntDesign}
          color={appColors?.primary}
        />
      </View>
    );
  };
  const renderTrendingNowList = item => {
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
          <Text
            style={{
              color: appColors?.black,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            {item?.title}
          </Text>
          <Text
            style={{
              color: appColors?.darkGray,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            {item?.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {renderHeader()}
      <FlatList
        data={trendingNowList}
        renderItem={({item}) => renderTrendingNowList(item)}
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
  );
};
