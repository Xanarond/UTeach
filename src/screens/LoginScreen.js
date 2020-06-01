import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> Login </Text>
        <TextInput
          value=""
          onChangeText={(input) => console.log(input)}
          placeholder="Email"
        />
        <TextInput
          value=""
          onChangeText={(input) => console.log(input)}
          placeholder="Password"
        />
      </View>
    );
  }
}
