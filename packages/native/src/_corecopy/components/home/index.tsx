import React, { Component } from 'react';
import Logo from '../logo';
import Split from '../split';
import { IAppState } from '../../state/stateTypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter } from '../../state/actions/counter';

export interface IHomeProps {}

interface IInjectedProps {
  count: number;
}

interface IReduxProps {
  dispatch: Dispatch<IAppState>;
}

export interface IHomeState {}

export class HomePure extends Component<
  IHomeProps & IInjectedProps & IReduxProps,
  IHomeState
> {
  render() {
    return (
      <div>
        <div>
          <Logo />
          <span>Welcome to Our Hybrid App!</span>
        </div>

        <Split foo="blah" bar={1} />

        <span>{`Count: ${this.props.count}`}</span>

        <button onClick={() => this.props.dispatch(incrementCounter())}>
          <span>Increment</span>
        </button>
      </div>
    );
  }
}

const Home = connect<IInjectedProps, any, IHomeProps>((state: IAppState) => ({
  count: state.counter.count,
}))(HomePure);

export default Home;
