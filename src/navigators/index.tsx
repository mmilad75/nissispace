import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './main-tab';

const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainTab />
    </NavigationContainer>
  );
};

export default Index;
