import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {AppNavigation} from "./src/navigation/AppNavigation";
import {bootstrap} from "./bootstrap";
import AppLoading from "expo/build/launch/AppLoading";

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={err => console.log(err)}
            />
        )
    }
    return <AppNavigation/>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
