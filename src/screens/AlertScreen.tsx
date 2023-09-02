import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const showPrompt = () => {
    Alert.prompt('Are you sure?', 'You cant revert', (value: string) =>
      console.log('info:', value),
    );
  };
  return (
    <View style={styles.container}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({container: {marginHorizontal: 20}});
