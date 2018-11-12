import React from 'react';
import ArticleList from '../components/ArticleList';
import {StyleSheet} from 'react-native';

const ResultScreen = (props) => {
  const showSingle = () => {
    props.navigation.navigate('Show');
  };

  return (
      <ArticleList style={styles.list} showSingle={showSingle}/>
  );

};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default ResultScreen;