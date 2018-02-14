import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ISplitProps } from './split-types';

// You would only include a .android file if you need to split
// functionality from iOS, otherwise just use .native for both.

// (If you add or remove files with special extensions you will need
// to quit the emulator and relaunch the app. You don't usually need
// to restart the packager.)

class Split extends React.Component<ISplitProps, any> {
  render() {
    return (
      <View>
        <Text style={styles.text}>This is Android</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { textAlign: 'center', padding: 20, fontWeight: 'bold' },
});

export default Split;
