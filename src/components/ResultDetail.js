import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({ result }) => {
  const { image_url, name, rating, review_count } = result;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{rating} Stars, {review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  description: {
    color: 'grey',
  }
});

export default ResultDetail;
