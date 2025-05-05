import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro'
import ProdutoForm from './screens/Produto'
import Menu from './screens/Menu'
import produtoListar from './screens/produtoListar';
// import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ProdutoForm" component={ProdutoForm}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
        <Stack.Screen name="Lista Produto" component={produtoListar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
