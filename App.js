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
	Button,
	Platform
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
        	<Text style={styles.regularText}>
            iko
          </Text>
        </View>

        <View style={[styles.v2, styles.container]}>
        	<Text style={styles.regularText}>
            says 
        	</Text>
        </View>

        <View style={[styles.v3, styles.container]}>
					<Text style={styles.HW}> 
						HELLO WORLD 
					</Text>
				</View>
				
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
		backgroundColor: "#ddd",
		marginTop: Platform.OS === 'ios' ? 21 : 0
  },
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10
  },
  v1:{
    flex: 1,
    backgroundColor: "yellowgreen"
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
    fontSize: 40,
    fontWeight: "bold"
	},
	regularText:{
		fontSize: 30
	}
});

export default App;
