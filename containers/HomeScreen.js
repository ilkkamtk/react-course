import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity, Image,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
          <Image
              style={styles.image}
              source={{uri: 'http://placekitten.com/640/480'}}
          />
          <TextInput
              style={styles.kentta}
              placeholder={'Search for TV show'}
              value={this.props.text}
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
    margin: 8,
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
  image: {
    alignSelf: 'stretch',
    height: 320,
  },
});

export default HomeScreen;