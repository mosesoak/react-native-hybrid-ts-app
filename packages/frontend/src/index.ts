import { AppRegistry } from 'react-native';
import App from './app/index';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
});