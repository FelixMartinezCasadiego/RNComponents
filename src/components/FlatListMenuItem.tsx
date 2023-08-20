import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MenuItems} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  menuItem: MenuItems;
}

type Navigation = {
  component: undefined;
};

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<Navigation>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <View style={styles.information}>
          <Icon name={menuItem.icon} color={'gray'} size={23} />
          <Text style={styles.itemText}>{menuItem.name}</Text>
        </View>
        <Icon name="chevron-forward-outline" color={'gray'} size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  information: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
