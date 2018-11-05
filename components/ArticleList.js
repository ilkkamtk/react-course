import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ArticleListItem from './ArticleListItem';

const articles = [
  {
    show: {
      id: 1,
      name: 'Naturistit rannalla',
      image: 'http://placekitten.com/600/300',
    },
  },
  {
    show: {
      id: 2,
      name: 'Kävelelevä Elämä',
      image: 'http://placekitten.com/600/301',
    },
  },
];

class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  // console.log(articles);
  render() {
    return (
        <FlatList
            style={styles.container}
            data={articles}
            renderItem={({item}) => <ArticleListItem
                showSingle={this.props.showSingle}
                name={item.show.name}
                image={item.show.image}/>}
            keyExtractor={article => `${article.show.id}`}
        />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default ArticleList;