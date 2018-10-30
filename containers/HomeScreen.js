import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Name of show here',
    };
  }

  render() {
    return (
        <View>
          <TextInput
              style={styles.kentta}
              placeholder={'Search for TV show'}
              value={this.state.text}
          />
          <TouchableOpacity style={styles.container}>
            <Text style={styles.nappi}>Search</Text>
          </TouchableOpacity>
        </View>);
  }
}

const styles = StyleSheet.create({
  kentta: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 40,
    padding: 10,
  },
  container: {
    alignItems: 'center',
    padding: 10,
  },
  nappi: {
    fontSize: 18,
    backgroundColor: 'blue',
    textAlign: 'center',
    width: 150,
    padding: 20,
    color: 'white',
  },
});

export default HomeScreen;