import React from 'react';
import {FlatList, ScrollView} from "react-native";
import {students} from "../../students";
import {StudentList} from "../components/StudentList";

const StudentFirstLessonScreen = () => {
    const data = students.filter(student => student.firstLesson && !student.trialLesson)
    return (
        <ScrollView>
            <FlatList data={data} keyExtractor={student => student.id.toString()} renderItem={({item}) => {
                return <StudentList student={item}/>
            }}/>
        </ScrollView>
    );
};

export default StudentFirstLessonScreen;
