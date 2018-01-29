/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Root from './App/root/Root'
import RootReducer from './App/root/RootReducer'
export default class App extends Component<{}> {
  store = createStore(RootReducer);
  render() {
    return (
        <Provider store={this.store}>
          <Root/>
        </Provider>
    );
  }
}
