/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './configure-store';
import RootNavigator from './navigators/RootNavigator';

const store = configureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <RootNavigator/>
        </Provider>
    );
  }
}

export default App;

