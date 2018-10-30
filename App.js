/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import HomeScreen from './containers/HomeScreen';
import ResultScreen from './containers/ResultScreen';
import SingleScreen from './containers/SingleScreen';

class App extends Component {
  render() {
    return (
        <HomeScreen />
        // <ResultScreen />
        // <SingleScreen />
    );
  }
}

export default App;

