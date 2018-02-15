import React, { Component } from 'react';
import { TouchableOpacity, StatusBar, Platform } from 'react-native';

import { IAppState } from '../../state/stateTypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { incrementCounter } from '../../state/actions/counter';
import Logo from '../logo';
import Split from '../split';

// Note the special import here!
import { View, Text } from '../glam-hybrid/index';

export interface IHomeProps {}

interface IInjectedProps {
  count: number;
}

interface IReduxProps {
  dispatch: Dispatch<IAppState>;
}

export interface IHomeState {}

type Props = IHomeProps & IInjectedProps & IReduxProps;

if (Platform.OS !== 'web') {
  StatusBar.setBarStyle('light-content');
}

export class HomePure extends Component<Props, IHomeState> {
  constructor(props: Props, context?: any) {
    super(props, context);
    this.handleCounterClick = this.handleCounterClick.bind(this);
  }

  handleCounterClick(event: any) {
    this.props.dispatch(incrementCounter());
  }

  render() {
    return (
      <View>
        <View
          backgroundColor="#222"
          padding={20}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Logo />
          <Text
            color="white"
            fontSize={18}
            marginVertical={2}
            textAlign="center"
          >
            Welcome to Our Hybrid App!
          </Text>
        </View>

        <Split foo="blah" bar={1} />

        <View
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text padding={20}>{`Count: ${this.props.count}`}</Text>
          <TouchableOpacity onPress={this.handleCounterClick}>
            <Text>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Home = connect<IInjectedProps, any, IHomeProps>((state: IAppState) => ({
  count: state.counter.count,
}))(HomePure);

export default Home;
