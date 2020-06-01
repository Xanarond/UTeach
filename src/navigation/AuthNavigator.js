import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  /* Signup: {
      screen: SignupScreen
    } */
});

export default createAppContainer(StackNavigator);
