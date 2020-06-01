import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addcount, subtract } from '../store/actions/index';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={style.center}>
        <Text>
          ProfileScreen
          {this.props.counter}
        </Text>
        <Button title="Add" onPress={() => this.props.addcount()} />
        <Button title="Subtract" onPress={() => this.props.subtract()} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addcount, subtract }, dispatch);

const mapStateToProps = (state) => ({
  counter: state,
});


const style = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
