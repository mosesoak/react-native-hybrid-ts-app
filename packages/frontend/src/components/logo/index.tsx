import React, { Component } from 'react';
// const logo = require("./images/logo.svg");
import { StyleSheet, Animated, Easing } from 'react-native';

interface ILogoState {
  logoTransformStyle: any;
}

export default class Logo extends Component<any, ILogoState> {
  spinValue = new Animated.Value(0);

  spinAmount = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  scalePulse = this.spinValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 1.1, 1, 0.9, 1],
  });

  // Jest workaround...
  state = {
    logoTransformStyle: null,
  };

  componentDidMount() {
    // Jest workaround...
    this.setState({
      logoTransformStyle: {
        transform: [{ scale: this.scalePulse }, { rotate: this.spinAmount }],
      },
    });

    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1500,
      delay: 1000,
      easing: Easing.inOut(Easing.back(3)),
    }).start(() => this.spin());
  }

  render() {
    return (
      <Animated.Image
        accessibilityLabel="React logo"
        source={require('./images/react-logo.png')}
        resizeMode="contain"
        style={[this.state.logoTransformStyle, styles.logo]}
      />
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
});
