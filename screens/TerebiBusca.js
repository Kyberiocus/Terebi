import React, {useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Image , TouchableOpacity, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Main({ navigation }) {
    useEffect(function(){
        navigation.setOptions({
          headerShown: false
        });
    });
    async function burger(){
        navigation.navigate("Login");
    }
    async function recientes(){
        navigation.navigate("Terebi");
    }
    async function categories(){
        navigation.navigate("TerebiCatego");
    }
    async function buscador(){
        navigation.navigate("TerebiBusca");
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{uri:'https://i.postimg.cc/5fKLXvNF/BG-blue.png'}}
                style={{width: '100%', height:'100%', justifyContent: 'flex-start', alignItems:'center'}}>
                <View style={styles.bar}>
                    <TouchableOpacity onPress={burger}>
                        <Image
                            source={{uri:'https://i.postimg.cc/1n4yMCkr/burger.png'}}
                            style={{width: 50, height:50}}
                            resizeMode = "stretch"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={recientes}>
                        <Image
                            source={{uri:'https://i.postimg.cc/v10QrFNm/casa.png'}}
                            style={{width: 50, height:50}}
                            resizeMode = "stretch"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={categories}>
                        <Image
                            source={{uri:'https://i.postimg.cc/bdDzt5Hz/star.png'}}
                            style={{width: 50, height:50}}
                            resizeMode = "stretch"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={buscador}>
                        <Image
                            source={{uri:'https://i.postimg.cc/WFKTymjL/lupa.png'}}
                            style={{width: 50, height:50}}
                            resizeMode = "stretch"
                        />
                    </TouchableOpacity>
                </View>
                <Image
                    source={{uri:'https://i.postimg.cc/K3MxhKvK/Buscador.png'}}
                    style={{width: '90%', height:'20%'}}
                />
                <TextInput
                    style={styles.input_buscador}
                    placeholder="Buscar"
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    bar:{
        backgroundColor: '#08AEF5',
        width: '95%',
        height: '6%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        flexDirection: 'row',
        marginTop:30
    },
    input_buscador: {
        width: '90%',
        height: 60,
        borderColor: '#08AEF5',
        borderWidth: 2,
        borderRadius: 40,
        fontSize: 20,
        backgroundColor: 'white',
        paddingLeft: 12,
        marginBottom: 30,
      }
  });