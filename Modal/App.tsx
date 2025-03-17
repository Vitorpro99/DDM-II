import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';


export default function App() {
  var [mostrarModal, setmostrarModal] = useState(false);
  const showModal = () => {
    setmostrarModal(!mostrarModal);
  }

  return (
    <View style={styles.container}>
      <Modal
        isVisible={mostrarModal}
        animationIn={'flipInY'}
        animationInTiming={2000}
        animationOut={'flipOutX'}
        animationOutTiming={2000}
      >

        <View style={styles.modalView}>
          <Text> Qual será o proximo contexto? </Text>
          <Button title="Modal" color="black" onPress={showModal} />
        </View>
      </Modal>
      <Button title="Modal" color="black" onPress={showModal} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    height: "40%",
    width: "80%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: (50)
    // alignSelf:"center"
  }
});
