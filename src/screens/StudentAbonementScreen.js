import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StudentList } from '../components/StudentList';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { getStudents } from '../store/actions/student';

class StudentAbonementScreen extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    // const data = students.filter((student) => student.firstLesson);
    console.log('sub', this.props.student.feed.filter((item) => item.Subscription === true));
    return (
      <ScrollView>
        <FlatList
          data={this.props.student.feed.filter((item) => item.Subscription === true)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StudentList student={item} />}
        />
      </ScrollView>
    );
  }
}

StudentAbonementScreen.navigationOptions = ({ navigation }) => ({
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


const mapDispatchToProps = (dispatch) => bindActionCreators({ getStudents }, dispatch);

const mapStateToProps = (state) => ({
  student: state.student,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentAbonementScreen);