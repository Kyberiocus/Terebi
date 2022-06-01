import React, {useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Image , TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CustomButtonRss from '../components/CustomButtonRss';

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
    async function anime(){
        navigation.navigate("TerebiAnime");
    }
    async function culturaOtaku(){
        navigation.navigate("TerebiCulturaOtaku");
    }
    async function japon(){
        navigation.navigate("TerebiJapon");
    }
    async function manga(){
        navigation.navigate("TerebiManga");
    }
    async function mercan_figu(){
        navigation.navigate("TerebiMercan_Figu");
    }
    async function novelasLigeras(){
        navigation.navigate("TerebiNovelasLigeras");
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
                    source={{uri:'https://i.postimg.cc/23sCFx2n/Categor-as.png'}}
                    style={{width: '90%', height:'20%'}}
                />
                <View style={styles.conBotones}>
                    <View style={styles.conBotones1}>
                        <CustomButtonRss link={'https://i.postimg.cc/ZKQ7wFDQ/anime.png'} action={anime}/>
                        <CustomButtonRss link={'https://i.postimg.cc/j5RZD8LD/cultura.png'} action={culturaOtaku}/>
                    </View>
                    <View style={styles.conBotones2}>
                        <CustomButtonRss link={'https://i.postimg.cc/qRQQy83j/japon.png'} action={japon}/>
                        <CustomButtonRss link={'https://i.postimg.cc/bvxmNXNX/manga.png'} action={manga}/>
                    </View>
                    <View style={styles.conBotones3}>
                        <CustomButtonRss link={'https://i.postimg.cc/vZ6PkgJZ/mercancia.png'} action={mercan_figu}/>
                        <CustomButtonRss link={'https://i.postimg.cc/mrfdsZ4N/novelas.png'} action={novelasLigeras}/>
                    </View>
                </View>
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
    conBotones:{
        width:'90%',
        height:'74%',
        paddingTop:20
    },
    conBotones1:{
        paddingBottom: 18, 
        paddingHorizontal: 1, 
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        flexDirection: 'row',
    },
    conBotones2:{
        paddingBottom: 18
        , 
        paddingHorizontal: 1, 
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        flexDirection: 'row',
    },
    conBotones3:{
        paddingBottom: 8,  
        paddingHorizontal: 1, 
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        flexDirection: 'row',
    }
  });