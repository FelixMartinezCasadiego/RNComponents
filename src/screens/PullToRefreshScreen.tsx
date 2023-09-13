import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
  const {
    theme: {colors, dark, dividerColor},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState('');
  const onRefresch = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('TERMINAMOS');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresch}
          progressViewOffset={10}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          tintColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={styles.container}>
        <HeaderTitle title="Pull to refresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
});
