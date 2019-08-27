/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import AppNavigator from './navigation';
import store from './store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={ styles.rootViewStyle }>
        <Text style={ styles.headerTextStyle }> Select Dates </Text>
        <Provider store={store}>
          {/* Material Tab Navigator with custom tabbar components */}
          <AppNavigator />
        </Provider>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    rootViewStyle: { 
      flex: 1, 
      backgroundColor: '#fff',
    },
    headerTextStyle: { 
      textAlign: 'center', 
      paddingVertical: 15, 
      fontSize:18, 
      fontWeight:'400' 
    },
});


