import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Split from '../split';
import { Home } from '../home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flexGrow: 1,
  },
});
