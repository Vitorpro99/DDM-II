import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import  Home from '../screens/Home'
import  ProdutoForm  from "../screens/Produto";
import produtoListar from "./produtoListar";

const Drawer = createDrawerNavigator();

export default function Menu() {
    return(
        <Drawer.Navigator initialRouteName="Pagina Inicial">
            <Drawer.Screen name="Pagina Inicial" component={Home} />
            <Drawer.Screen name="Cadastrar Produto" component={ProdutoForm}/>
            <Drawer.Screen name="Listar produtos" component={produtoListar}/>
        </Drawer.Navigator>
    )
}