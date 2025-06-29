import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../styles/estilo';
export default function Home() {

    const navigation = useNavigation();

    const login = () =>{
        navigation.replace("Login"); 
    }

    return (
    <SafeAreaView>
        <View style={estilo.container}>
            <View style={estilo.div1}>
                <Text style={estilo.mainTittle}>Mini-Frota</Text>
            </View>
            <View style={estilo.div2}>

                <View style={estilo.divButton}>
                    <TouchableOpacity style={estilo.mainButton} 
                    onPress={login}>
                        <Text style={estilo.mainButtonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.secondButton}>
                        <Text style={estilo.secondButtonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}