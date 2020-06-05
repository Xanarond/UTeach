import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo/build/launch/AppLoading';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './src/store/reducers';
import bootstrap from './bootstrap';
import SwitchNavigator from './src/navigation/SwitchNavigator';
import firebase from './config/firebase';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
