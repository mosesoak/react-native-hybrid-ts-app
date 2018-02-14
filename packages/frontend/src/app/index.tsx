import React, { Component } from 'react';
const logo = require("../logo.svg");
import { Image, StyleSheet, Text, View, Animated, Easing } from 'react-native';
import Split from './components/split';

class App extends Component {

  spinValue = new Animated.Value(0);
  
  spinAmount = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '120deg']
  });

  scalePulse = this.spinValue.interpolate({
    inputRange:  [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 1.1,  1,   0.9,  1]
  });

  componentDidMount() {
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1000,
        delay: 1000,
        easing: Easing.inOut(Easing.back(3)),
      }
    ).start(() => this.spin())
  }

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Animated.Image
            accessibilityLabel="React logo"
            source={logo}
            resizeMode="contain"
            style={[
              {
                transform: [
                  { scale: this.scalePulse },
                  { rotate: this.spinAmount },
                ]
              },
              styles.logo,
            ]}
          />
          <Text style={styles.title}>Welcome to React Native Web!</Text>
        </View>
        
        <Split foo='blah' bar={1} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
  },
  logo: {
    height: 80
  },
  header: {
    backgroundColor: '#222',
    padding: 20
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  intro: {
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});

export default App;
