import React, {createElement, useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList,Pressable, TouchableOpacity } from 'react-native';
import { auth, firestore} from '../firebase';
import estilo from '../estilo';
import { useNavigation } from '@react-navigation/native';
import {Produto} from '../Model/Produto';

export default function produtoListar() {

    const [produto,setProduto] = useState<Produto[]>([]); //array em branco
    const [load,setLoad] = useState(true);

        const refProduto = firestore.collection("Usuario")
        .doc(auth.currentUser?.uid).collection("Produto")
    
    const criaItem = ({item}) =>(
        <View>
            <Text>{item.produto}</Text>
            <Text>{item.quantidade}</Text>
            <Text>{item.preco}</Text>
        </View>

    )

    useEffect(()=>{
        if(load){ 
            const lerCollection = refProduto
            .onSnapshot((querySnapshot)=>{
                const Produto = [];
                querySnapshot.forEach((documentSnapshot)=>{
                    produto.push({
                            ...documentSnapshot.data(),
                        key:   documentSnapshot.id
                    });
                });
                setProduto(produto);
                console.log(produto);
                setLoad(false);
                    })
            return () => lerCollection()
                }
            },[produto]
       )

    return(
        <View>
            <FlatList
            data={produto}
            renderItem={criaItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    )

}