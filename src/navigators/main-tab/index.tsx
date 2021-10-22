import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/main-tab/Home';
import Notification from '../../screens/main-tab/Notification';
import screens from '../screens';

const Tab = createBottomTabNavigator();

const MainTab: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={screens.mainTab.home} component={Home} />
      <Tab.Screen
        name={screens.mainTab.notification}
        component={Notification}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
