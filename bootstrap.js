import * as Font from 'expo-font';

export default async function bootstrap() {
  try {
    await Font.loadAsync({
      'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
      Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
    });
  } catch (e) {
    console.log('Error: ', e);
  }
}
