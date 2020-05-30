import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const NotificationScreen = () => {
    return (
        <View style={style.center}>
                <Text>NotificationScreen</Text>
        </View>
    );
};

export default NotificationScreen;

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})