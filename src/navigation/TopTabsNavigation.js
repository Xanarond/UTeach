import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import StudentAbonementScreen from '../screens/StudentAbonementScreen';
import StudentOnePayScreen from '../screens/StudentOnePayScreen';
import StudentFirstLessonScreen from '../screens/StudentFirstLesson';

const topTabsConfig = {
  StudentsActive: {
    screen: StudentAbonementScreen,
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
    screen: StudentOnePayScreen,
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
