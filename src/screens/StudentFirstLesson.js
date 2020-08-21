import React from 'react';
import { FlatList, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StudentList } from '../components/StudentList';
import { getStudents } from '../store/actions/student';

class StudentFirstLessonScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    if (this.props.student !== 0) {
      this.setState({ loading: false });
    }
    this.props.getStudents();
  }

  render() {
    const { loading } = this.state;
    // console.log('trial', this.props.student.feed.filter((item) => item.TrialLesson === true));
    return (loading) ? <Text>Loading ...</Text> : (
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentFirstLessonScreen);
