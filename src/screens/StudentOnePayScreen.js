import React from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StudentList } from '../components/StudentList';
import { getStudents } from '../store/actions/student';

class StudentOnePayScreen extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    console.log('onepay', this.props.student.feed.filter((item) => item.TrialLesson === true));
    return (
      <FlatList
        data={this.props.student.feed.filter((item) => item.TrialLesson === true)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentList student={item} />}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getStudents }, dispatch);

const mapStateToProps = (state) => ({
  student: state.student,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentOnePayScreen);
