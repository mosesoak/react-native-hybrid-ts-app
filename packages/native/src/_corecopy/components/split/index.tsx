import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ISplitProps } from './split-types';

// It's recommended that we don't use the .web extension since
// a standard index file

// (If you add or remove files with special extensions you will need
// to quit and restart your local web server.)

class Split extends React.Component<ISplitProps, any> {
  render() {
    return (
      <View>
        <Text style={styles.text}>This is Web!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { textAlign: 'center', padding: 20, fontWeight: 'bold' },
});

export default Split;
