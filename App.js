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
  View,
} from 'react-native';
import AppNavigator from './navigation';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <Text style={{textAlign:'center', paddingVertical:15}}>Select Dates</Text>
        <AppNavigator />
       </SafeAreaView>
    )
  }
}


