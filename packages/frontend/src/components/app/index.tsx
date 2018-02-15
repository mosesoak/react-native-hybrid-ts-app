import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import createReduxStore from '../../state/createReduxStore';
import Home from '../home/index';

const reduxStore = createReduxStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Home />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' },
});

export default App;
