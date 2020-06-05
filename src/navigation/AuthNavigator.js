import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Регистрация',
    },
  },
});

export default createAppContainer(StackNavigator);
