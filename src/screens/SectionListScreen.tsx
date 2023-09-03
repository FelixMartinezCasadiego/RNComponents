import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';

interface Houses {
  casa: string;
  data: string[];
}

const Houses: Houses[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={Houses}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text>{item}</Text>}
        ListHeaderComponent={<HeaderTitle title="Section list" />}
        renderSectionHeader={({section}) => (
          <View>
            <HeaderTitle title={section.casa} />
          </View>
        )}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20, flex: 1},
});
