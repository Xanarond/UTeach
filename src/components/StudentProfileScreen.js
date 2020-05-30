import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity} from "react-native";


function StudentProfileScreen({student, onOpen}) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(student)}>
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{uri: student.img}}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>
                            {new Date(student.date).toLocaleDateString()}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default StudentProfileScreen;

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: '#fff',
        fontFamily: 'open-regular'
    }
})
