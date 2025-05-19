import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { auth, firestore } from '../firebase';
import estilo from '../estilo';
import { useNavigation } from '@react-navigation/native';
import {Usuario} from '../Model/Usuario'

export default function Cadastro(){

    const navigation = useNavigation();
    const [formUsuario,setFormUsuario] =
        useState<Partial<Usuario>>({});
    const refUsuario = firestore.collection("Usuario");
    const Voltar = () =>{
        navigation.replace("Login");
    }
    const fazerLogin = () => {
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
                error=>alert(error.message)
            )
    }

    return(
<View style={estilo.container}>
        <View style={estilo.inputContainer}>
            <TextInput style={estilo.input} placeholder='Nome'
            onChangeText={texto => setFormUsuario({
                ...formUsuario,nome:texto
            })}
            />
            <TextInput style={estilo.input} inputMode="email" placeholder='Email'
            onChangeText={texto=> setFormUsuario({
                ...formUsuario,email:texto
            })}
            />
            <TextInput style={estilo.input} inputMode="password" placeholder='Senha'
            onChangeText={texto => setFormUsuario({
                ...formUsuario,senha:texto
            })}
            />
            <TextInput style={estilo.input} placeholder="Telefone"
            onChangeText={texto => setFormUsuario({
                ...formUsuario,fone:texto
            })}
            />

        
        </View>
        <View style={estilo.buttonContainer}>
            <TouchableOpacity style={estilo.button}><Text style={estilo.buttonText}
            onPress={fazerLogin}
            
            > Cadastrar </Text></TouchableOpacity>
            <TouchableOpacity style={[estilo.button,estilo.buttonOutline]} onPress={Voltar}><Text style={[estilo.buttonText,estilo.buttonOutlineText]}>Voltar</Text></TouchableOpacity>
            </View>
        </View>
    )

}