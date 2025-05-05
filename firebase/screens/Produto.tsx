import React, {createElement, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { auth, firestore, addDoc, collection} from '../firebase';
import estilo from '../estilo';
import { useNavigation } from '@react-navigation/native';
import {Produto} from '../Model/Produto';

export default function ProdutoForm(){
    
    const navigation = useNavigation();
    const [formProduto, setFormProduto] = useState<Partial<Produto>>({});
    const refProduto = firestore.collection("Produto")
    const cadastrarProduto = () =>{
        const IdProduto = refProduto.doc(auth.currentUser.uid);
        IdProduto.set({
            id:             auth.currentUser.uid,
            produto:        formProduto.produto,
            preco:          formProduto.preco,
            quantidade:     formProduto.quantidade
        })
    }
return(
    <View style={estilo.container}>
        <Text style={estilo.text}>Cadastro de Produtos</Text>
        <TextInput style={estilo.inputContainer} placeholder="Produto" 
        onChangeText={texto =>setFormProduto({
            ...formProduto,produto:texto
        })}
        ></TextInput>
        
        <TextInput style={estilo.inputContainer} placeholder="Preço do seu produto"
        onChangeText={texto =>setFormProduto({
            ...formProduto,preco:texto
        })}
        ></TextInput>

        <TextInput style={estilo.inputContainer} placeholder="Quantidade em estoque"
        onChangeText={texto =>setFormProduto({
            ...formProduto,quantidade:texto
        })}
        ></TextInput>
        <View style={estilo.buttonContainer}>
        <TouchableOpacity style={estilo.button} onPress={cadastrarProduto}>
            <Text style={estilo.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
        
    </View>
)
}
