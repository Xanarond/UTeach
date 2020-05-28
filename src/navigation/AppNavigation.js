import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import StudentActiveScreen from "../screens/StudentActiveScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {Ionicons} from '@expo/vector-icons'

const bottomTabsConfig = {
    Students: {
        screen: StudentActiveScreen,
        navigationOptions: {
            tabBarLabel: 'Ученики',
            tabBarIcon: info => (
                <Ionicons name='ios-people' size={25} color={info.tintColor}/>
            )
        }
    },
    Notifications: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarLabel: 'Оповещения',
            tabBarIcon: info => (
                <Ionicons name='ios-notifications' size={25} color={info.tintColor}/>
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Профиль',
            tabBarIcon: info => (
                <Ionicons name='ios-person' size={25} color={info.tintColor}/>
            )
        }
    }
}

const BottomNavigator = createMaterialBottomTabNavigator(bottomTabsConfig, {
    activeTintColor: '#8e8e8e',
    shifting: true,
    barStyle: {
        backgroundColor: '#386ac7'
    }
})
export const AppNavigation = createAppContainer(BottomNavigator)
