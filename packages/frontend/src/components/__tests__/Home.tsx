import 'react-native';
import React from 'react';
import { Home } from '../Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const home = <Home />;
  const tree = renderer.create(home);
});
