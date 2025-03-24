import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import Modal from 'react-native-modal';
export default function App() {

  var [mostrarCerto,setmostrarCerto] = useState(false);

  var [mostrarAviso,setmostrarAviso] = useState(false);

  var [mostrarErro,setmostrarErro] = useState(false);
  
  const showCerto = () =>{
    setmostrarCerto(!mostrarCerto);
  }
  const showAviso = () =>{
    setmostrarAviso(!mostrarAviso);
  }
  const showErro = () =>{
    setmostrarErro(!mostrarErro);
  }
  return (
    <View style={styles.container}>
      <Modal style={styles.modal} isVisible={mostrarCerto}>
        <View>
        <Text>Alguma coisa aconteceu com sucesso</Text>
          <Image
            source={require('./assets/sucesso.gif')} 
            style={styles.img}
            />

          <Button title="Fechar" color="black" onPress={showCerto}/>
        </View>
      </Modal>
      <Modal style={styles.modal} isVisible={mostrarAviso}>
      <View>
          <Image

            source={require('./assets/warning.gif')} 
            style={styles.img}/>

          <Text>Alguma coisa tem algo pra avisar para você</Text>
          <Button title="Fechar" color="black" onPress={showAviso}/>
        </View>
      </Modal>
      <Modal style={styles.modal} isVisible={mostrarErro}>

      <View>
          <Image

            source={require('./assets/erro.gif')} 
            style={styles.img}q2/>

          <Text>Alguma errado você fez</Text>
          <Button title="Fechar" color="black" onPress={showErro}/>
        </View>

      </Modal>
      <Button title="Certo" color="green" onPress={showCerto}/>
      <Button title="Aviso" color="yellow" onPress={showAviso}/>
      <Button title="erro" color="red" onPress={showErro}/>
      <StatusBar style="auto" />
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
  img:{
    width: 200,
    height: 200,
    // marginTop: 20,
    // marginBottom: 20,
    alignSelf: 'center',
    resizeMode:'contain'
  },
  modal:{
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 20,
    alignSelf:'center'
  }
});
