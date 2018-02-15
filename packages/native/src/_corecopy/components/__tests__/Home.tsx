import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { HomePure } from '../home';
const Home = HomePure as any;

it('renders correctly', () => {
  const home = <Home />;
  const tree = renderer.create(home);
});
