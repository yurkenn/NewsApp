import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';

import NewsCard from './components/NewsCard';
import news_data from './news_data.json';

import Scroller from './components/Banner/Scroller';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const uniqeKey = item => item.u_id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => <Scroller />}
        keyExtractor={uniqeKey}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
