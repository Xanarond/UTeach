import React from 'react';
import { FlatList, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StudentList } from '../components/StudentList';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { getStudents } from '../store/actions/student';

class StudentAbonementScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('пропсы', this.props);
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
    // const data = students.filter((student) => student.firstLesson);
    // console.log('sub', this.props.student.feed.filter((item) => item.Subscription === true));
    return (loading) ? <Text>Loading ...</Text> : (
      <FlatList
        data={this.props.student.feed.filter((item) => item.Subscription === true)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentList student={item} />}
      />
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
