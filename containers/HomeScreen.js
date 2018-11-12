import React from 'react';
import {connect} from 'react-redux';
import {getTVMazeShowsAction} from '../actions/tvmaze-actions';
import {setQueryFormAction} from '../actions/form-actions';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity, Image,
} from 'react-native';

const HomeScreen = ({navigation, query, store, shows, setQueryFormAction, getTVMazeShowsAction}) => {
  const setQuery = (evt) => {
    // console.log(evt.nativeEvent.text);
    setQueryFormAction(evt.nativeEvent.text);
  };

  const doSearch = () => {
    getTVMazeShowsAction(query);
    navigation.navigate('Results');
  };

  return (
      <View>
        <Image
            style={styles.image}
            source={{uri: 'http://placekitten.com/640/480'}}
        />
        <TextInput
            style={styles.kentta}
            placeholder={'Search for TV show'}
            value={query}
            onChange={setQuery}
            clearButtonMode="always"
        />
        <TouchableOpacity style={styles.container} onPress={doSearch}>
          <Text style={styles.nappi}>Search</Text>
        </TouchableOpacity>
      </View>);

};

const styles = StyleSheet.create({
  kentta: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    margin: 8,
    padding: 10,
    borderRadius: 3,
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
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    alignSelf: 'stretch',
    height: 320,
  },
});

const mapStateToProps = (store) => {
  console.log(store);
  return {
    query: store.formState.query,
  };
};

export default connect(mapStateToProps, {
  getTVMazeShowsAction,
  setQueryFormAction,
})(HomeScreen);