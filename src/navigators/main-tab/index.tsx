import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/main-tab/Home';
import Notification from '../../screens/main-tab/Notification';
import screens from '../screens';
import HomeIcon from '../../assets/icons/Home';
import NotificationIcon from '../../assets/icons/Notification';
import {ParamListBase} from '@react-navigation/routers';
import {RouteProp} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

interface RenderIcons {
  focused: boolean;
  route: RouteProp<ParamListBase, string>;
}

const renderIcons = ({route, focused}: RenderIcons) => {
  let icon;
  const color = focused ? '#000000' : '#8F92A1';

  switch (route.name) {
    case screens.mainTab.home:
      icon = <HomeIcon color={color} />;
      break;
    case screens.mainTab.notification:
      icon = <NotificationIcon color={color} />;
      break;

    default:
      break;
  }
  return icon;
};

const MainTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => renderIcons({route, focused}),
      })}>
      <Tab.Screen
        options={{title: '首页', tabBarActiveTintColor: '#000000'}}
        name={screens.mainTab.home}
        component={Home}
      />
      <Tab.Screen
        options={{title: '通知', tabBarActiveTintColor: '#000000'}}
        name={screens.mainTab.notification}
        component={Notification}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
