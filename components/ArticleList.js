import React from 'react';
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

const ArticleList = (props) => {

  return (
      <FlatList
          style={styles.container}
          data={articles}
          renderItem={({item}) => <ArticleListItem
              showSingle={props.showSingle}
              name={item.show.name}
              image={item.show.image}/>}
          keyExtractor={article => `${article.show.id}`}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default ArticleList;