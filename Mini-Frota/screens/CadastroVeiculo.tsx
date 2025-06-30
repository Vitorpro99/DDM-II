import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../styles/estiloForms';
import { SafeAreaView } from "react-native-safe-area-context";
import { Veiculo } from "../Model/Veiculo";
import { auth, firestore, storage } from '../firebase';
import * as ImagePicker from 'expo-image-picker';
import { uploadBytes } from 'firebase/storage';

export default function Cadastro() {
    const navigation = useNavigation();
    const [formVeiculo, setFormVeiculo] = useState<Partial<Veiculo>>({});
    const [imagePath, setImagePath] = useState('https://i.pinimg.com/736x/b4/ef/d2/b4efd2db313e76462f0a6e7ae4509af3.jpg');
    
    const refVeiculo = firestore.collection("User")
        .doc(auth.currentUser?.uid)
        .collection("Vehicle");

    const selecionarFoto = () => {
        

        Alert.alert(
            'Selecionar Foto',
            'Escolha uma opção:',
            [
                { text: 'Câmera', onPress: abrirCamera },
                { text: 'Galeria', onPress: abrirGaleria }
            ]
        );
    };

    const abrirCamera = async () => {
        const permissao = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissao.granted) {
            alert("Permissão de câmera negada");
            return;
        }

        const foto = await ImagePicker.launchCameraAsync({ allowsEditing: true });
        if (!foto.canceled) {
            console.log("Veículo a ser salvo:", formVeiculo);

            enviarFoto(foto);
        }
    };

    const abrirGaleria = async () => {
        const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissao.granted) {
            console.log("Veículo a ser salvo:", formVeiculo);

            alert("Permissão de galeria negada");
            return;
        }

        const foto = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (!foto.canceled) {
            console.log("Veículo a ser salvo:", formVeiculo);

            enviarFoto(foto);
        }
    };

    const enviarFoto = async (foto) => {
        const uri = foto.assets[0].uri;
        setImagePath(uri);

        const nomeArquivo = foto.assets[0].fileName || `foto_${Date.now()}.jpg`;
        const ref = storage.ref(`veiculos/${nomeArquivo}`);
        const img = await fetch(uri);
        const bytes = await img.blob();

        const result = await uploadBytes(ref, bytes);
        const urlDownload = await storage.ref(result.metadata.fullPath).getDownloadURL();
        console.log("Veículo a ser salvo:", formVeiculo);

        setFormVeiculo({ ...formVeiculo, foto: urlDownload });
    };

    const salvarVeiculo = () => {
        const veiculo = new Veiculo(formVeiculo);
        const refIdVeiculo = refVeiculo.doc();
        veiculo.id = refIdVeiculo.id;

        refIdVeiculo.set(veiculo.toFirestore())
            .then(() => {
                //enviarFoto(foto);
                console.log("UID do usuário logado:" + auth.currentUser?.uid);
                alert("Veículo adicionado!");
                limpar();
            })
            .catch(error => alert(error.message));
    };

    const deletarVeiculo = () => {
        if (!formVeiculo.id) {
            alert("Nenhum veículo selecionado para deletar.");
            return;
        }

        refVeiculo.doc(formVeiculo.id).delete()
            .then(() => {
                alert("Veículo deletado com sucesso.");
                limpar();
            })
            .catch(error => alert(error.message));
    };

    const limpar = () => {
        setFormVeiculo({});
        setImagePath('https://i.pinimg.com/736x/b4/ef/d2/b4efd2db313e76462f0a6e7ae4509af3.jpg');
    };

    return (
        <SafeAreaView>
            <View style={estilo.container}>
                <View style={estilo.div1}>
                    <Text style={estilo.mainTittle}>CADASTRO DE VEÍCULO</Text>
                </View>

                <Image source={{ uri: imagePath }} style={{ width: 200, height: 200, alignSelf: 'center', marginVertical: 10 }} />
                <TouchableOpacity style={estilo.mainButton} onPress={selecionarFoto}>
                    <Text style={estilo.mainButtonText}>Selecionar Foto</Text>
                </TouchableOpacity>

                <View style={estilo.div2}>
                    <View style={estilo.subDiv}>
                        <Text style={estilo.textForm}>Marca</Text>
                        <TextInput style={estilo.inputForm} placeholder="Marca"
                            value={formVeiculo.marca}
                            onChangeText={texto => setFormVeiculo({ ...formVeiculo, marca: texto })}
                        />
                        <Text style={estilo.textForm}>Modelo</Text>
                        <TextInput style={estilo.inputForm} placeholder="Modelo"
                            value={formVeiculo.modelo}
                            onChangeText={texto => setFormVeiculo({ ...formVeiculo, modelo: texto })}
                        />
                        <Text style={estilo.textForm}>Ano</Text>
                        <TextInput style={estilo.inputForm} placeholder="Ano"
                            keyboardType="numeric"
                            value={formVeiculo.ano}
                            onChangeText={texto => setFormVeiculo({ ...formVeiculo, ano: texto })}
                        />
                        <Text style={estilo.textForm}>Motorização</Text>
                        <TextInput style={estilo.inputForm} placeholder="Ex: 1.0, 1.4, 2.0"
                            value={formVeiculo.motor}
                            onChangeText={texto => setFormVeiculo({ ...formVeiculo, motor: texto })}
                        />
                    </View>
                </View>

                <View style={estilo.div3}>
                    <TouchableOpacity style={estilo.mainButton} onPress={salvarVeiculo}>
                        <Text style={estilo.mainButtonText}>Salvar Veículo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.secondButton} onPress={deletarVeiculo}>
                        <Text style={estilo.secondButtonText}>Deletar Veículo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
