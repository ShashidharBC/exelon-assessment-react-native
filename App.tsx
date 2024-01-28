import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {appColors} from './app/utils/appColors';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigationStack from './app/routing/TabNavigationStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? appColors?.black : appColors?.white,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={appColors?.white}
      />
      <NavigationContainer>
        <TabNavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
