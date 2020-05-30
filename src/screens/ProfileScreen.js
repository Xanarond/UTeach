import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const ProfileScreen = () => {
    return (
        <View style={style.center}>
                <Text>ProfileScreen</Text>
        </View>
    );
};

export default ProfileScreen;

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})