import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderTitle title="Modal Screen" />
      <Button
        title="Open modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View style={styles.modalContainer}>
          {/* Modal content */}
          <View style={styles.modalInformation}>
            <Text style={styles.title}>Modal</Text>
            <Text style={styles.bodyText}>Body modal</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInformation: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 20,
  },
});
