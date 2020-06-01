import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StudentList } from '../components/StudentList';
import { students } from '../../students';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

const StudentActiveScreen = () => {
  const data = students.filter((student) => student.firstLesson);
  return (
    <ScrollView>
      <FlatList
        data={data}
        keyExtractor={(student) => student.id.toString()}
        renderItem={({ item }) => <StudentList student={item} />}
      />
    </ScrollView>
  );
};

export default StudentActiveScreen;

StudentActiveScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Занятия',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => navigation.push('Create')}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
