import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ISplitProps } from './split-types';

// If you need to split a shared RN/RNW component into separate files,
// create a .native version which works for both iOS & Android, and
// break out the type interface as per this folder's README.

// (If you add or remove files with special extensions you will need
// to quit the simulator and relaunch the app. You don't usually need
// to restart the packager.)

class Split extends React.Component<ISplitProps, any> {
  render() {
    return (
      <View>
        <Text style={styles.text}>This is iOS</Text>
        <Text style={[styles.text, { paddingTop: 5 }]}>
          (and Android, if no .android file is present)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { textAlign: 'center', paddingTop: 20, fontWeight: 'bold' },
});

export default Split;
