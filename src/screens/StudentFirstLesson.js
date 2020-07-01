import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { students } from '../../students';
import { StudentList } from '../components/StudentList';
import { getStudents } from '../store/actions/student';

class StudentFirstLessonScreen extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    console.log('trial', this.props.student.feed.filter((item) => item.TrialLesson === true));
    return (
      <ScrollView>
        <FlatList
          data={this.props.student.feed.filter((item) => item.TrialLesson === true)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StudentList student={item} />}
        />
      </ScrollView>
    );
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({ getStudents }, dispatch);

const mapStateToProps = (state) => ({
  student: state.student,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentFirstLessonScreen);
