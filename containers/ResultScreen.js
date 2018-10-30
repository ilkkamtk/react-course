import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: 'Change this',
    };
  }

  changeText = () => {
    this.setState({
      newText: 'Now it`s changed',
    });
  };

  render() {
    return (
        <View>
          <Text style={styles.bigblue}>Result screen</Text>
          <Text>{this.state.newText}</Text>
          <Button title={'Click me'} onPress={this.changeText}/>
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
  red: {
    color: 'red',
  },
});

export default ResultScreen;