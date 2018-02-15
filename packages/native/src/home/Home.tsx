import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Split from 'src/_corecopy/components/split';

interface IHomeProps {}

interface IHomeState {}

export class Home extends Component<IHomeProps, IHomeState> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to our Hybrid App!</Text>
        <Split foo="blah" bar={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
