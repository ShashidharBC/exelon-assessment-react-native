import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon, {Icons} from '../utils/icons';
import {
  HomeScreen,
  MyCartScreen,
  MyProfileScreen,
  NotificationScreen,
  ProductDetailScreen,
} from '../screens';
import * as Animatable from 'react-native-animatable';
import {appColors} from '../utils/appColors';
import {createStackNavigator} from '@react-navigation/stack';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: HomeScreen,
    color: appColors?.black,
    alphaClr: appColors?.white,
  },
  {
    route: 'Cart',
    label: 'My Cart',
    type: Icons.Feather,
    icon: 'shopping-cart',
    component: MyCartScreen,
    color: appColors?.black,
    alphaClr: appColors?.white,
  },
  {
    route: 'Add',
    label: 'Notification',
    type: Icons.Ionicons,
    icon: 'notifications',
    component: NotificationScreen,
    color: appColors?.black,
    alphaClr: appColors?.white,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: Icons.FontAwesome,
    icon: 'user',
    component: MyProfileScreen,
    color: appColors?.black,
    alphaClr: appColors?.white,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? appColors?.white : appColors?.black}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: appColors?.white,
                  paddingHorizontal: 8,
                }}>
                {item?.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AnimTab3() {
  const Stack = createStackNavigator();
  const StackScreens = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="MyCart" component={MyCartScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
          // backgroundColor: '#000',
        },
      }}>
      {TabArr.map((item, index) => {
        if (item?.route === 'Home') {
          return (
            <Tab.Screen
              key={index}
              name={item?.route}
              component={StackScreens}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        } else {
          return (
            <Tab.Screen
              key={index}
              name={item?.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        }
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});
