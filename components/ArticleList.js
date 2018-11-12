import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ArticleListItem from './ArticleListItem';

const ArticleList = ({shows, handleNavigation}) => {

  return (
      <FlatList
          style={styles.container}
          data={shows}
          renderItem={({item}) => <ArticleListItem
              handleNavigation={handleNavigation}
              name={item.show.name}
              image={item.show.image}
              url={item.show.url}
              officialSite={item.show.officialSite}
              summary={item.show.summary}/>}
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