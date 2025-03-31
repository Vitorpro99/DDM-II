import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { auth } from '../firebase';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = () =>{
        auth
        .signInWithEmailAndPassword(email,senha)
        .then(userCredentials => {
            console.log('Usuário logado com sucesso', userCredentials.user.email);
        }).catch(error=>alert(error.message))
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