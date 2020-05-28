import React from 'react';
import {Body, Button, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import {StyleSheet} from "react-native";

export function StudentList({student}) {
    return (
        <List style={styles.textWrap}>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{uri: student.img}}/>
                </Left>
                <Body>
                    <Text>{student.full_name}</Text>
                    <Text>{student.phone}</Text>
                    <Text>{student.address}</Text>
                    <Text note numberOfLines={1}>{student.text}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        </List>
    );
}

const styles = StyleSheet.create({
    textWrap: {
        textAlign: 'center',
        paddingVertical: 5,
    },
})



