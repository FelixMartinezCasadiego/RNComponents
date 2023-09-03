import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <HeaderTitle title="Infinite scroll" />
          </View>
        }
        onTouchEnd={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View style={styles.ActivityIndicatiorContainer}>
            <ActivityIndicator size={30} color={'#5856D6'} />
          </View>
        }
      />
    </View>
  );
};

export default InfiniteScrollScreen;

const styles = StyleSheet.create({
  headerContainer: {marginHorizontal: 20},
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
  ActivityIndicatiorContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
