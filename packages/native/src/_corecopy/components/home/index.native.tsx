import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Logo from '../logo';
import Split from '../split';
import { IAppState } from '../../state/stateTypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter } from '../../state/actions/counter';

interface IHomeProps {}

interface IInjectedProps {
  count: number;
}

interface IReduxProps {
  dispatch: Dispatch<IAppState>;
}

interface IHomeState {}

StatusBar.setBarStyle('light-content');

class HomePure extends Component<
  IHomeProps & IInjectedProps & IReduxProps,
  IHomeState
> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo />
          <Text style={styles.title}>Welcome to Our Hybrid App!</Text>
        </View>

        <Split foo="blah" bar={1} />

        <Text style={styles.instructions}>{`Count: ${this.props.count}`}</Text>

        <TouchableOpacity
          onPress={() => this.props.dispatch(incrementCounter())}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 2,
    textAlign: 'center',
  },
  intro: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
  code: {
    fontFamily: 'monospace, monospace',
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

const Home = connect<IInjectedProps, any, IHomeProps>((state: IAppState) => ({
  count: state.counter.count,
}))(HomePure);

export default Home;
