import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../styles/estiloForms';
import { SafeAreaView } from "react-native-safe-area-context";
import { Usuario } from "../Model/Usuario";
import { auth, firestore } from '../firebase'
export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [formUsuario, setFormUsuario] = useState<Partial<Usuario>>({});
    const refUsuario = useState(firestore.collection("Usuario"));

    const logar = () => {
        auth
            .createUserWithEmailAndPassword(formUsuario.email, formUsuario.senha)
            .then(
                userCredentials => {
                    const usuario = userCredentials.user;
                    console.log("Registrado com o email: ", usuario.email);

                    const idUsuario = refUsuario.doc();
                    idUsuario.set({
                        id:     idUsuario.id,
                        nome:   formUsuario.nome,
                        email:  formUsuario.email,
                        senha:  formUsuario.senha,
                        fone:   formUsuario.fone
                    })
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
                            onChangeText={texto => setFormUsuario({
                                ...formUsuario, nome: texto
                            })}
                        />
                        <Text style={estilo.textForm}>Email</Text>
                        <TextInput style={estilo.inputForm} placeholder="Digite seu email"
                            onChangeText={texto => setFormUsuario({
                                ...formUsuario, email: texto
                            })}
                        />
                        <Text style={estilo.textForm}>Senha</Text>
                        <TextInput style={estilo.inputForm} placeholder="Digite sua senha"
                            onChangeText={texto => setFormUsuario({
                                ...formUsuario, senha: texto
                            })}
                        />
                        <Text style={estilo.textForm}>Fone</Text>
                        <TextInput style={estilo.inputForm} placeholder="Digite o seu telefone"
                            onChangeText={texto => setFormUsuario({
                                ...formUsuario, fone: texto
                            })}
                        />

                    </View>
                </View>

                <View style={estilo.div3}>

                    <View style={estilo.divButton}>
                        <TouchableOpacity style={estilo.mainButton} onPress={logar} >
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