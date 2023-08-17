import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Icon name="star-outline" size={30} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
