import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <HeaderTitle title="Theme" />
      <View style={styles.touchableOpacityContainer}>
        <TouchableOpacity
          onPress={setLightTheme}
          style={{
            ...styles.TouchableOpacityStyle,
            backgroundColor: colors.primary,
          }}
          activeOpacity={0.8}>
          <Text style={styles.TouchableOpacityText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          style={{
            ...styles.TouchableOpacityStyle,
            backgroundColor: colors.primary,
          }}
          activeOpacity={0.8}>
          <Text style={styles.TouchableOpacityText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  TouchableOpacityStyle: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacityText: {
    color: '#ffffff',
    fontSize: 20,
  },
  touchableOpacityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
