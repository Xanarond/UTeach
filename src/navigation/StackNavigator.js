import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import StudentAddScreen from '../screens/StudentAddScreen';
import { TopTabNavigator } from './TopTabsNavigation';
import { StudentList } from '../components/StudentList';
import StudentProfileScreen from '../components/StudentProfileScreen';
import { THEME } from '../../styles';

export const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
};

export const StudentNavigator = createAppContainer(createStackNavigator(
  {
    Home: {
      screen: TopTabNavigator,
      navigationOptions: {
        headerTitle: 'Ученики',
        headerTitleAlign: 'center',
      },
    },
  },
));

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

export const StudentsNavigator = createStackNavigator(
  {
    Main: StudentList,
    Students: StudentProfileScreen,
  },
  navigatorOptions,
);
