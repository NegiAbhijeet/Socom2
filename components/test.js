import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const RatingItem = ({ value }) => {
  const filledStars = Math.floor(value);
  const emptyStars = 5 - filledStars;

  const renderStar = (type) => (
    <Icon
      name={type === 'filled' ? 'star' : 'star-outline'}
      color={type === 'filled' ? '#F1C40F' : '#ccc'}
      size={14}
    />
  );

  return (
    <TouchableOpacity disabled style={styles.stars}>
      {[...Array(filledStars)].map((_, i) => (
        <View key={i}>{renderStar('filled')}</View>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <View key={i}>{renderStar('empty')}</View>
      ))}
    </TouchableOpacity>
  );
};

const SearchBar = () => {
  return (

    <View style={styles.msgcontainer}>
      <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Changing Seasons (fashion) </Text>
        <Text style={styles.followerText}>1568 Following</Text>
        <RatingItem value={4} />
      </View>
      <Text style={styles.following}>Following</Text>
    </View>

  );
};
export default SearchBar;
const styles = StyleSheet.create({
  msgcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'relative',

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  followerText: {
    fontSize: 10,
    color: '#666',
  },

  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  following: {
    position: 'absolute',
    right: 10,
    top: '40%',
    backgroundColor: '#FFBF23',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 12
  }
});