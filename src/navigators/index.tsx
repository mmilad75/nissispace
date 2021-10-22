import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './main-tab';

const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default Index;
