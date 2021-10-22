import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './main-tab';
import linking from './linking';

const Index: React.FC = () => {
  return (
    <NavigationContainer linking={linking}>
      <StatusBar barStyle="light-content" />
      <MainTab />
    </NavigationContainer>
  );
};

export default Index;
