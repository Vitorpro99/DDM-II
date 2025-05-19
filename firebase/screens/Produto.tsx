import React, {createElement, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Alert,Image } from 'react-native';
import { auth, firestore, addDoc, collection} from '../firebase';
import estilo from '../estilo';
import { useNavigation } from '@react-navigation/native';
import {Produto} from '../Model/Produto';
import * as ImagePicker from 'expo-image-picker';



export default function ProdutoForm(){
    const [imagePath,setimagePath] = useState('');
    const navigation = useNavigation();
    const [formProduto, setFormProduto] = useState<Partial<Produto>>({});
    const refProduto = firestore.collection("Usuario")
    
    .doc(auth.currentUser?.uid).collection("Produto")
    const limpar = () =>{
        setFormProduto({});
    }
    const cadastrarProduto = () =>{
        const IdProduto = refProduto.doc();
        const codProduto = IdProduto.id;
        IdProduto.set({
            id:             codProduto,
            produto:        formProduto.produto,
            preco:          formProduto.preco,
            quantidade:     formProduto.quantidade
        })
    alert("Produto cadastrado com sucesso");
    limpar();
    }
    const selecionaFoto = () =>{
        Alert.alert(
            'Selecionar Foto',
            'Escolha uma das alternativas',
            [{
                text:"Camera",
                onPress: () => abrirCamera()
            },
            {
                text:"Abrir Galeria",
                onPress: () => abrirGaleria()
            }
            
        ]
        )
    }

    const abrirCamera = async() =>{
        const permissao = await ImagePicker.requestCameraPermissionsAsync();
        if (permissao.granted === false){
            alert("Você recusou o acesso a camera")
            return;
        }
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,

        })
        console.log(foto.assets[0]);
        setimagePath(foto.assets[0].uri)
    
    }
    const abrirGaleria = async() =>{
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissao.granted === false){
        alert("Você recusou o acesso a galeria")
        return;
    }
    const foto = await ImagePicker.launchImageLibraryAsync({
        allowsEditing:true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
        
    });
    setimagePath(foto.assets[0].uri)
}
return(
    <View style={estilo.container}>
        <Text style={estilo.text}>Cadastro de Produtos</Text>
        <Image source={{uri: imagePath}} style={estilo.foto}/>
        
        <TouchableOpacity style={estilo.button} onPress={selecionaFoto}>
            <Text style={estilo.buttonText}>Selecionar foto</Text>
        </TouchableOpacity>

        <TextInput style={estilo.inputContainer} placeholder="Produto"
        value={formProduto.produto}
        onChangeText={texto =>setFormProduto({
            ...formProduto,produto:texto
        })}
        ></TextInput>
        
        <TextInput style={estilo.inputContainer} placeholder="Preço do seu produto"
        keyboardType='decimal-pad'
        value={formProduto.preco}
        onChangeText={texto =>setFormProduto({
            ...formProduto,preco:texto
        })}
        ></TextInput>

        <TextInput style={estilo.inputContainer} placeholder="Quantidade em estoque"
        keyboardType='decimal-pad'  
        value={formProduto.quantidade}
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
