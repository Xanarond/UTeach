import React from 'react';
import {FlatList, ScrollView} from "react-native";
import {StudentList} from "../components/StudentList";
import {students} from "../../students";


const StudentActiveScreen = () => {
    return (
        <ScrollView>
            <FlatList data={students} keyExtractor={student => student.id.toString()} renderItem={({item}) => {
                console.log(students)
                return <StudentList student={item}/>
            }}/>
        </ScrollView>
    );
};

export default StudentActiveScreen;