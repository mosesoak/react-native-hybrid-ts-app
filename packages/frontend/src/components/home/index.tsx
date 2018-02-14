import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import Logo from '../logo';
import Split from '../split';

interface IHomeProps { }

interface IHomeState { }

if (Platform.OS !== 'web') {
  StatusBar.setBarStyle('light-content');
}

export class Home extends Component<IHomeProps, IHomeState> {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Logo />
          <Text style={styles.title}>Welcome to Our Hybrid App!</Text>
        </View>

        <Split foo='blah' bar={1} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#222',
    padding: 20
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 2,
    textAlign: 'center'
  },
  intro: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});