import React from 'react';
import { FlatList } from 'react-native';
import { students } from '../../students';
import { StudentList } from '../components/StudentList';

function StudentTrialScreen(props) {
  const data = students.filter(
    (student) => !student.firstLesson && student.trialLesson,
  );
  return (
    <FlatList
      data={data}
      keyExtractor={(student) => student.id.toString()}
      renderItem={({ item }) => <StudentList student={item} />}
    />
  );
}

export default StudentTrialScreen;
