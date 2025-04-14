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

    return(
        <View>
            <Text style={{marginBottom: 20}}>Usuário Logado!</Text>

            <TouchableOpacity style={estilo.button} onPress={logout}>
                
                <Text style={estilo.button}>Logout</Text>
            </TouchableOpacity>
        </View>
    )

}