import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

const ArticleListItem = (props) => {

  return (
      <View style={styles.item}>
        <Text style={styles.title}>{props.name}</Text>
        <View style={styles.imageBox}>
          <Image
              style={styles.image}
              source={{uri: props.image}}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}
                              onPress={props.showSingle}>
              <Text style={styles.buttonText}>Visit site</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    padding: 8,
  },
  title: {
    fontSize: 18,
  },
  imageBox: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 240,
    height: 320,
    borderRadius: 10,
  },
  buttons: {
    width: 240,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 50,
    bottom: 20,
  },
  button: {
    backgroundColor: 'rgba(0,0,255,0.5)',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '900',
  },
});

export default ArticleListItem;