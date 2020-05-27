import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import StudentScreen from "../screens/StudentScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {Ionicons} from '@expo/vector-icons'

const bottomTabsConfig = {
    Students: {
        screen: StudentScreen,
        navigationOptions: {
            tabBarLabel: 'Ученики',
            tabBarIcon: info => (
                <Ionicons name='ios-albums' size={25} color={info.tintColor}/>
            )
        }
    },
    Notifications: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarLabel: 'Оповещения',
            tabBarIcon: info => (
                <Ionicons name='ios-star' size={25} color={info.tintColor}/>
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Профиль',
            tabBarIcon: info => (
                <Ionicons name='ios-star' size={25} color={info.tintColor}/>
            )
        }
    }
}

const BottomNavigator = createMaterialBottomTabNavigator(bottomTabsConfig, {
    activeTintColor: '#fff',
    shifting: true,
    barStyle: {
        backgroundColor: '#fff'
    }
})

export const AppNavigation = createAppContainer(BottomNavigator)
