import React from 'react';
import {Text, View} from "react-native";
import {SegmentMenu} from "../components/SegmentMenu";


function StudentTrialScreen(props) {
    return (
        <View>
            <SegmentMenu/>
            <div>
                <Text>StudentScreen</Text>
            </div>
        </View>
    );
}

export default StudentTrialScreen;