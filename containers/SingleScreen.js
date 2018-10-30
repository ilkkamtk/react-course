import React from 'react';
import {StyleSheet, WebView} from 'react-native';

const SingleScreen = (props) => {
  return <WebView
      style={styles.container}
      source={{uri: 'https://www.amc.com/shows/the-walking-dead'}}
      startInLoadingState={true}
  />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default SingleScreen;