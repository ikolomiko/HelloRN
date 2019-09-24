/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View style={[styles.v1, styles.container]}>
          <Text>
            iko
          </Text>
        </View>

        <View style={[styles.v2, styles.container]}>
          <Text> says </Text>
        </View>

        <View style={[styles.v3, styles.container]}>
        <Text style={styles.HW}> HELLO WORLD </Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: "orange"
  },
  container:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  v1:{
    flex: 1,
    backgroundColor: Colors.blue
  },
  v2:{
    flex: 2,
    backgroundColor: "powderblue"
  },
  v3:{
    flex: 3,
    backgroundColor: "skyblue"
  },
  HW:{
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;
