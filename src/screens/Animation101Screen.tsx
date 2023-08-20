import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

const Animation101Screen = () => {
  const opacity: Animated.Value = useRef(new Animated.Value(0)).current;
  const position: Animated.Value = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        onPress={() => {
          fadeIn(), startMoving(-100, 800);
        }}
        title="FadeIn"
      />
      <Button onPress={fadeOut} title="fadeOut" />
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
