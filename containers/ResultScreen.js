import React from 'react';
import ArticleList from '../components/ArticleList';
import {StyleSheet} from 'react-native';

const ResultScreen = (props) => {

  return (
      <ArticleList style={styles.list}/>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default ResultScreen;