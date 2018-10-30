/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import HomeScreen from './containers/HomeScreen';

class App extends Component {
  render() {
    return (
        <HomeScreen text={'Some text as prop.'}/>
    );
  }
}

export default App;

