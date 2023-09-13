import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <HeaderTitle title="TextInputs" />
      <TextInput
        style={{
          ...styles.inputStyle,
          borderColor: colors.text,
          color: colors.text,
        }}
        placeholder="Name"
        autoCorrect={false}
        autoCapitalize="words"
        onChangeText={value => onChange(value, 'name')}
        placeholderTextColor={dividerColor}
      />
      <TextInput
        style={{
          ...styles.inputStyle,
          borderColor: colors.text,
          color: colors.text,
        }}
        placeholder="email"
        onChangeText={value => onChange(value, 'email')}
        keyboardType="email-address"
        placeholderTextColor={dividerColor}
      />
      <TextInput
        style={{
          ...styles.inputStyle,
          borderColor: colors.text,
          color: colors.text,
        }}
        placeholder="Phone number"
        onChangeText={value => onChange(value, 'phone')}
        keyboardType="phone-pad"
        placeholderTextColor={dividerColor}
      />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Subscribe</Text>
        <CustomSwitch
          isOn={isSubscribed}
          onChange={value => onChange(value, 'isSubscribed')}
        />
      </View>
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'grey',
    marginVertical: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
