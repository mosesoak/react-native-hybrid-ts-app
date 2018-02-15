import { AppRegistry } from 'react-native';
import App from './components/app';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
