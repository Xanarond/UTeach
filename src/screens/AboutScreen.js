import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AboutScreen = () => (
  <Text styles={styles.container}>
    AboutScreen
  </Text>
);

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
