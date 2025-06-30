import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../styles/estiloForms';
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "../Model/User";
import Login from "../screens/Login"
import { auth, firestore } from '../firebase'
export default function Cadastro() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [formUser, setFormUser] = useState<Partial<User>>({});
    const refUser = firestore.collection("User");
    const gotoLogin = () =>{
        navigation.replace("Login")
    }

    const logar = () => {
        auth
            .createUserWithEmailAndPassword(formUser.email, formUser.senha)
            .then(
                userCredentials => {
                    const user = userCredentials.user;
                    console.log("Registrado com o email: ", user.email);

                    const idUser = refUser.doc(user.uid);
                    idUser.set({
                        id:     user.uid,
                        nome:   formUser.nome,
                        email:  formUser.email,
                        senha:  formUser.senha,
                        fone:   formUser.fone
                    })
                    navigation.replace("Logged");
                }
            )
            .catch(
                error => alert(error.message)
            )
    }

    return (
        <SafeAreaView>
            <View style={estilo.container}>
                <View style={estilo.div1}>
                    <Text style={estilo.mainTittle}>CADASTRO</Text>
                    <Text>Digite suas informações</Text>
                </View>

                <View style={estilo.div2}>
                    <View style={estilo.subDiv}>
                        <Text style={estilo.textForm}>Nome</Text>
                        <TextInput style={estilo.inputForm} placeholder="Digite o seu nome"
                            onChangeText={texto => setFormUser({
                                ...formUser, nome: texto
                            })}
                        />
                        <Text style={estilo.textForm}>Email</Text>
                        <TextInput style={estilo.inputForm} placeholder="Digite seu email"
                            onChangeText={texto => setFormUser({
                                ...formUser, email: texto
                            })}
                        />
                        <Text style={estilo.textForm}>Senha</Text>
                        <TextInput style={estilo.inputForm} placeholder="Digite sua senha"
                            onChangeText={texto => setFormUser({
                                ...formUser, senha: texto
                            })}
                        />
                        <Text style={estilo.textForm}>Fone</Text>
                        <TextInput style={estilo.inputForm} placeholder="Digite o seu telefone"
                            onChangeText={texto => setFormUser({
                                ...formUser, fone: texto
                            })}
                        />

                    </View>
                </View>

                <View style={estilo.div3}>

                    <View style={estilo.divButton}>
                        <TouchableOpacity style={estilo.mainButton} onPress={logar} >
                            <Text style={estilo.mainButtonText}>CADASTRAR</Text>
                        </TouchableOpacity >
                         <TouchableOpacity onPress={gotoLogin} style={estilo.secondButton}>
                        <Text style={estilo.secondButtonText}>Login</Text>
                    </TouchableOpacity> 
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}