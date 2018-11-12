import React from 'react';
import {StyleSheet, WebView} from 'react-native';

const SingleScreen = (props) => {
  const url = props.navigation.state.params;
  return <WebView
      style={styles.container}
      source={{uri: url}}
      startInLoadingState={true}
  />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default SingleScreen;