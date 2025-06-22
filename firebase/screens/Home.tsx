import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import estilo from '../estilo';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation  = useNavigation();

    const logout = () =>{
        auth.signOut()
        .then(()=>{
            navigation.replace("Login");
        })
    }
    const goProduto = () =>{
        navigation.replace("ProdutoForm")
    }
    return(
       <View style={estilo.container}>
            <Text style={{marginBottom:20}}>
                Usuário logado: {auth.currentUser?.email}
            </Text>

            <View style={estilo.buttonContainer}>
                <TouchableOpacity
                    style={estilo.button}
                    onPress={logout}
                >
                    <Text style={estilo.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}