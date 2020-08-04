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
  addStudent,
  updateAbonement,
  updateCFullName,
  updateComment,
  updateCPhone,
  updateOnePay,
  updateSAdress,
  updateSFullName,
  updateSPhone,
  updateTrialLesson,
} from '../store/actions/student';
import styles from '../../styles';


class StudentAddScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {trial: false, subscribe: false, onepay: false};
  }

  toggleSwitch = value => {
    this.setState({trial: !this.state.trial});
  };

  toggleSwitch2 = value => {
    this.setState({subscribe: !this.state.subscribe});
  };
  toggleSwitch3 = value => {
    this.setState({onepay: !this.state.onepay});
  };

  student = () => {
    this.props.addStudent();
    this.props.navigation.navigate('Home');
  };

  render() {
    // console.log('State:', this.state.isChecked);
    return (
      <ScrollView style={styles.scrolly}>
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
        <Text style={styles.text}>Пробное занятие</Text>
        <Switch
          style={styles.switch}
          trackColor={{false: '#235421', true: '#07fa00'}}
          ios_backgroundColor="#3e3e3e"
          value={this.state.trial}
          onValueChange={value => this.props.updateTrialLesson(value)}
          onChange={value => this.toggleSwitch(value)}
        />
        <Text style={styles.text}>Абонемент</Text>
        <Switch
          style={styles.switch}
          trackColor={{false: '#2d395d', true: '#819cff'}}
          ios_backgroundColor="#3e3e3e"
          value={this.state.subscribe}
          onValueChange={value => this.props.updateAbonement(value)}
          onChange={value => this.toggleSwitch2(value)}
        />
        <Text style={styles.text}>Разовая оплата</Text>
        <Switch
          style={styles.switch}
          trackColor={{false: '#7c2d2d', true: '#ff000b'}}
          ios_backgroundColor="#3e3e3e"
          value={this.state.onepay}
          onValueChange={value => this.props.updateOnePay(value)}
          onChange={value => this.toggleSwitch3(value)}
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
    updateAbonement,
    updateOnePay
  }, dispatch);
};

const mapStateToProps = (state) => ({
  student: state.student,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentAddScreen);
