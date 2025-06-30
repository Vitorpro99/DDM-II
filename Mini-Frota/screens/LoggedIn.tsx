import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../styles/estiloLog';
export default function Home() {

    const navigation = useNavigation();
    const gotoAddVeiculo = () =>{
        navigation.replace("CadastroVeiculo")
    }

    return (
    <SafeAreaView>
        <View style={estilo.container}>
            <View style={estilo.div1}>
                <Text style={estilo.mainTittle}>Bem-Vindo</Text>
            </View>
            <View style={estilo.div2}>

                <View style={estilo.divButton}>
                    <TouchableOpacity style={estilo.mainButton}>
                        <Text style={estilo.mainButtonText}>Meus veiculos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.secondButton} onPress={gotoAddVeiculo}>
                        <Text style={estilo.secondButtonText}>Novo veiculo +</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}