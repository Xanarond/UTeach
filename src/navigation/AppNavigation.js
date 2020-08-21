import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import {
  AboutNavigator, addStudentNavigator,
  NotificationNavigator,
  ProfileNavigator,
  StudentNavigator,
  navigatorOptions,
} from './StackNavigator';

const bottomTabsConfig = {
  Students: {
    screen: StudentNavigator,
    navigationOptions: {
      tabBarLabel: 'Ученики',
      tabBarIcon: (info) => (
        <Ionicons name="ios-people" size={25} color={info.tintColor} />
      ),
    },
    navigatorOptions,
  },
  addStudent: {
    screen: addStudentNavigator,
    navigationOptions: {
      tabBarLabel: 'Добавить',
      tabBarIcon: (info) => (
        <Ionicons
          name="ios-add-circle-outline"
          size={25}
          color={info.tintColor}
        />
      ),
    },
    navigatorOptions,
  },
  Notifications: {
    screen: NotificationNavigator,
    navigationOptions: {
      tabBarLabel: 'Оповещения',
      tabBarIcon: (info) => (
        <Ionicons name="ios-notifications" size={25} color={info.tintColor} />
      ),
    },
    navigatorOptions,
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarLabel: 'Профиль',
      tabBarIcon: (info) => (
        <Ionicons name="ios-person" size={25} color={info.tintColor} />
      ),
    },
    navigatorOptions,
  },
};
const BottomNavigator = createMaterialBottomTabNavigator(bottomTabsConfig, {
  activeTintColor: '#4a4a4a',
  shifting: true,
  barStyle: {
    backgroundColor: '#386ac7',
  },
  navigatorOptions,
});

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Занятия',
        // drawerIcon: <Ionicons name='ios-star' />
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'О приложении',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: '#386ac7',
      labelStyle: {
        fontFamily: 'open-bold',
      },
    },
  },
);

export const AppNavigation = createAppContainer(MainNavigator);
