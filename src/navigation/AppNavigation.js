import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import StudentActiveScreen from '../screens/StudentActiveScreen';
import StudentTrialScreen from '../screens/StudentTrialScreen';
import StudentFirstLessonScreen from '../screens/StudentFirstLesson';
import {
  AboutNavigator, addStudentNavigator,
  NotificationNavigator,
  ProfileNavigator,
} from './StackNavigator';

/* const ProfileNavigator = createStackNavigator(
    {
        Main: StudentActiveScreen,
        Profile: StudentProfileScreen
    }
) */

const topTabsConfig = {
  StudentsActive: {
    screen: StudentActiveScreen,
    navigationOptions: {
      tabBarLabel: 'Абонемент',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
    },
  },
  StudentTrials: {
    screen: StudentTrialScreen,
    navigationOptions: {
      tabBarLabel: 'Разовая оплата',
    },
  },
  Booked: {
    screen: StudentFirstLessonScreen,
    navigationOptions: {
      tabBarLabel: 'Пробное занятие',
    },
  },
};

export const TopTabNavigator = createMaterialTopTabNavigator(topTabsConfig);

const bottomTabsConfig = {
  Students: {
    screen: TopTabNavigator,
    navigationOptions: {
      tabBarLabel: 'Ученики',
      tabBarIcon: (info) => (
        <Ionicons name="ios-people" size={25} color={info.tintColor} />
      ),
    },
  },
  addStudent: {
    screen: addStudentNavigator,
    navigationOptions: {
      tabBarLabel: 'Добавить',
      tabBarIcon: (info) => (
        <Ionicons name="ios-add-circle-outline" size={25} color={info.tintColor} />
      ),
    },
  },
  Notifications: {
    screen: NotificationNavigator,
    navigationOptions: {
      tabBarLabel: 'Оповещения',
      tabBarIcon: (info) => (
        <Ionicons name="ios-notifications" size={25} color={info.tintColor} />
      ),
    },
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarLabel: 'Профиль',
      tabBarIcon: (info) => (
        <Ionicons name="ios-person" size={25} color={info.tintColor} />
      ),
    },
  },
};
const BottomNavigator = createMaterialBottomTabNavigator(bottomTabsConfig, {
  activeTintColor: '#4a4a4a',
  shifting: true,
  barStyle: {
    backgroundColor: '#386ac7',
  },
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
