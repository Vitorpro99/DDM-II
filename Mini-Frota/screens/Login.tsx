import React, { use, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../styles/estiloForms';
import { SafeAreaView } from "react-native-safe-area-context";
import Cadastro from '../screens/Cadastro'
import { auth } from "../firebase";
import loggedIn from "..screens/loggedIn";
export default function Login() {
    

    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const logar = () => {
        auth
        .signInWithEmailAndPassword(email,senha)
        .then(userCredentials =>{
            console.log("Usuário logado com sucesso", userCredentials.user.email);
            console.log("Usuário logado com sucesso", userCredentials.user.uid);

            console.log("UID do usuário logado:" + auth.currentUser?.uid);
        }).catch(error=>alert(error.message));
    }

    useEffect(() => {
        const login = auth.onAuthStateChanged(
            user => {
                if(user) navigation.replace("Logged")
            }
        )
    })

    const goToCadastro = () =>{
        navigation.replace("Cadastro")
    }
    
    return (
    <SafeAreaView>
        <View style={estilo.container}>
            <View style={estilo.div1}>
                <Text style={estilo.mainTittle}>LOGIN</Text>
                <Text>Digite suas informações de login</Text>
            </View>

            <View style={estilo.div2}>
                <View style={estilo.subDiv}>
                <Text style={estilo.textForm}>Email</Text>
                <TextInput style={estilo.inputForm} placeholder="Digite seu email" onChangeText={email => setEmail(email)}/>
                <Text style={estilo.textForm}>Senha</Text>
                <TextInput style={estilo.inputForm} placeholder="Digite sua senha" onChangeText={senha=> setSenha(senha)}/>
                </View>
            </View>

            <View style={estilo.div3}>

                <View style={estilo.divButton}>
                    <TouchableOpacity style={estilo.mainButton} onPress={logar}>
                        <Text style={estilo.mainButtonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.secondButton} onPress={goToCadastro}>
                        <Text style={estilo.secondButtonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}