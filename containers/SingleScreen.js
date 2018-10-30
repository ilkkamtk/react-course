import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class SingleScreen extends Component {

  render() {
    return (
        <View>
          <Text style={styles.bigblue}>Single TV show here</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    margin: 40,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default SingleScreen;