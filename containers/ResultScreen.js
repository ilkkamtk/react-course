import React, {Component} from 'react';
import ArticleList from '../components/ArticleList';
import {StyleSheet} from 'react-native';

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.showSingle = this.showSingle.bind(this);
  }

  showSingle() {
    this.props.navigation.navigate('Show');
  };

  render() {
    return (
        <ArticleList style={styles.list} showSingle={this.showSingle}/>
    );

  }
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default ResultScreen;