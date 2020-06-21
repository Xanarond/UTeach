import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  addStudent, updateCFullName, updateComment, updateCPhone,
  updateSAdress,
  updateSFullName,
  updateSPhone,
  updateTrialLesson,
} from '../store/actions/student';
import styles from '../../styles';


class StudentAddScreen extends React.Component {

  state = {isChecked: false};

  toggleSwitch = value => {
    this.setState({isChecked: !this.state.isChecked});
  };

  student = () => {
    this.props.addStudent();
    this.props.navigation.navigate('Home');
  };

  render() {
    // console.log('State:', this.state.isChecked);
    return (
      <ScrollView>
        <TextInput
          style={styles.border}
          value={this.props.student.sfullname}
          onChangeText={text => this.props.updateSFullName(text)}
          placeholder="Имя ученика"
        />
        <TextInput
          style={styles.border}
          value={this.props.student.sphone}
          onChangeText={text => this.props.updateSPhone(text)}
          placeholder="Телефон ученика"
          textContentType='telephoneNumber'
        />
        <TextInput
          style={styles.border}
          value={this.props.student.saddress}
          onChangeText={text => this.props.updateSAdress(text)}
          placeholder="Адрес ученика"
          textContentType='telephoneNumber'
        />
        <TextInput
          style={styles.border}
          value={this.props.student.cfullname}
          onChangeText={text => this.props.updateCFullName(text)}
          placeholder="Имя Контактного лица"
          textContentType='telephoneNumber'
        />
        <TextInput
          style={styles.border}
          value={this.props.student.cphone}
          onChangeText={text => this.props.updateCPhone(text)}
          placeholder="Телефон Контактного лица"
          textContentType='telephoneNumber'
        />
        <Text>Описание</Text>
        <Switch
          style={styles.switch}
          trackColor={{false: '#767577', true: '#85ff81'}}
          ios_backgroundColor="#3e3e3e"
          value={this.state.isChecked}
          onValueChange={value => this.props.updateTrialLesson(value)}
          onChange={value => this.toggleSwitch(value)}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.border}
          value={this.props.student.comment}
          onChangeText={text => this.props.updateComment(text)}
          placeholder="Коментарий"
          textContentType='telephoneNumber'
        />
        <TouchableOpacity style={styles.button} onPress={this.student}>
          <Text>Добавить ученика</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addStudent,
    updateSFullName,
    updateSPhone,
    updateSAdress,
    updateCFullName,
    updateCPhone,
    updateComment,
    updateTrialLesson,
  }, dispatch);
};

const mapStateToProps = (state) => ({
  student: state.student,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentAddScreen);
