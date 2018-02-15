import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Home from '../home';

it('renders correctly', () => {
  const home = <Home />;
  const tree = renderer.create(home);
});
