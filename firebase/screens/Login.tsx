import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();
    const logar = () =>{
        auth
        .signInWithEmailAndPassword(email,senha)
        .then(userCredentials => {
            console.log('Usuário logado com sucesso', userCredentials.user.email);
        }).catch(error=>alert(error.message))
    }
    useEffect(() => {
        const login = auth.onAuthStateChanged(
            user => {
                if(user) navigation.replace("Home")
            }
        )
    })
    const irCadastro = () =>{
        navigation.replace("Cadastro")
    }
    return(
        <View style={styles.login}>
            <Text style={styles.loginText}>Login</Text>

            <Text style={styles.textEmail}>Email</Text>
            <TextInput placeholder="Digite seu email" inputMode="email" onChangeText={email => setEmail(email)}></TextInput>
            <Text style={styles.textEmail}>Senha</Text>
            <TextInput placeholder="Digite sua senha"secureTextEntry={true}
            onChangeText={senha => setSenha(senha)}
            ></TextInput>

            <Pressable style={styles.buttao} onPress={logar}>
                <Text style={styles.textBotao}>Logar</Text>
            </Pressable>
            <Pressable style={styles.buttao} onPress={irCadastro}>
                <Text style={styles.textBotao}>Cadastro</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    login:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems:'center',
    },
    textEmail:{
        fontSize: 30,
    },
    loginText:{
        fontWeight:'bold',
        fontSize: 50,
    },
    buttao:{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
    },
    textBotao:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginHorizontal: 30,
        color: 'black',
    }
})