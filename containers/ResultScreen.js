import React from 'react';
import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {StyleSheet} from 'react-native';

const ResultScreen = ({shows, navigation}) => {
  const handleNavigation = (routeName, params) => {
    navigation.navigate(routeName, params);
  };


  return (
      <ArticleList style={styles.list} shows={shows} handleNavigation={handleNavigation}/>
  );

};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

const mapStateToProps = (store) => {
  console.log(store);
  return {
    shows: store.tvMazeApiState.shows,
  };
};

export default connect(mapStateToProps)(ResultScreen);