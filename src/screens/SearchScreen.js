import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from './../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, errorMsg, results] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  }

  return (
    <>
      <View style={styles.search}>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
        <Text>We have found {results.length} results</Text>
        {errorMsg ? <Text>We have found {errorMsg} results</Text> : null}
      </View>

      <ScrollView style={styles.view}>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
  search: {
    marginHorizontal: 15,
  },
  view: {
    marginVertical: 10,
  }
});

export default SearchScreen;
