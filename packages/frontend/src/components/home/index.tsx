import React, { Component } from 'react';
import Logo from '../logo';
import Split from '../split';
import { IAppState } from '../../state/stateTypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter } from '../../state/actions/counter';
import { Div, Span } from 'glamorous';

export interface IHomeProps {}

interface IInjectedProps {
  count: number;
}

interface IReduxProps {
  dispatch: Dispatch<IAppState>;
}

export interface IHomeState {}

const styles = () => ({
  container: {
    flexGrow: 1,
    alignContent: 'center',
  },
  header: {
    backgroundColor: '#222',
    padding: 20,
    alignContent: 'center',
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

type Props = IHomeProps & IInjectedProps & IReduxProps;

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
      <Div>
        <Div
          backgroundColor="#222"
          padding={20}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Logo />
          <Span
            color="white"
            fontSize={18}
            marginVertical={2}
            textAlign="center"
            fontFamily="sans-serif"
          >
            Welcome to Our Hybrid App!
          </Span>
        </Div>

        <Split foo="blah" bar={1} />

        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Span padding={20}>{`Count: ${this.props.count}`}</Span>
          <button onClick={this.handleCounterClick}>
            <span>Increment</span>
          </button>
        </Div>
      </Div>
    );
  }
}

const Home = connect<IInjectedProps, any, IHomeProps>((state: IAppState) => ({
  count: state.counter.count,
}))(HomePure);

export default Home;
