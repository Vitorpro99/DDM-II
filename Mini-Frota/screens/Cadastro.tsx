import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../styles/estiloForms';
import { SafeAreaView } from "react-native-safe-area-context";
2
export default function Cadastro() {
    return (
    <SafeAreaView>
        <View style={estilo.container}>
            <View style={estilo.div1}>
                <Text style={estilo.mainTittle}>CADASTRO</Text>
                <Text>Digite suas informações</Text>
            </View>

            <View style={estilo.div2}>
                <View style={estilo.subDiv}>
                <Text style={estilo.textForm}>Email</Text>
                <TextInput style={estilo.inputForm} placeholder="Digite seu email"/>
                <Text style={estilo.textForm}>Senha</Text>
                <TextInput style={estilo.inputForm} placeholder="Digite sua senha"/>
                </View>
            </View>

            <View style={estilo.div3}>

                <View style={estilo.divButton}>
                    <TouchableOpacity style={estilo.mainButton} >
                        <Text style={estilo.mainButtonText}>CADASTRAR</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={estilo.secondButton}>
                        <Text style={estilo.secondButtonText}>Cadastrar-se</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}