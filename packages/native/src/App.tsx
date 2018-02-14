import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Home from 'src/home/Home';

export default class App extends Component<any, any> {
  render() {
    return (
      <Home />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
