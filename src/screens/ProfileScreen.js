import React from 'react';
import firebase from 'firebase';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile</Text>
        <Text>{this.props.user.email}</Text>
        <Text>{this.props.user.username}</Text>
        <Text>{this.props.user.bio}</Text>
        <Button title="Logout" onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfileScreen);
