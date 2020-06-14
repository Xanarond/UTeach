import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import StudentAddScreen from '../screens/StudentAddScreen';


export const ProfileNavigator = createAppContainer(createStackNavigator(
  {
    Home: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Профиль',
      },
    },
  },
));
export const addStudentNavigator = createAppContainer(createStackNavigator(
  {
    addStudent: {
      screen: StudentAddScreen,
      navigationOptions: {
        title: 'Добавить ученика',
      },
    },
  },
));

export const NotificationNavigator = createAppContainer(createStackNavigator(
  {
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        title: 'Уведомления',
      },
    },
  },
));

export const AboutNavigator = createStackNavigator(
  {
    Lessons: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'О приложении',
      },
    },
  },
);
