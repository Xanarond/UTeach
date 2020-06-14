import React from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../store/actions/user'
import firebase from 'firebase'
import styles from '../../styles';

class LoginScreen extends React.Component {
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.navigation.navigate('Home')
      }else {
        this.props.navigation.navigate('Auth')
      }
      console.log(user);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.border}
          value={this.props.user.email}
          onChangeText={input => this.props.updateEmail(input)}
          placeholder='Email'
        />
        <TextInput
          style={styles.border}
          value={this.props.user.password}
          onChangeText={input => this.props.updatePassword(input)}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>OR</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, login, updatePassword,  getUser }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
