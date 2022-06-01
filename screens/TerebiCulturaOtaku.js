import React, {useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Image , TouchableOpacity, FlatList, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as rssParser from 'react-native-rss-parser';

export default function Main({ navigation }) {
    const [terebi,setTerebi] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function(){
        navigation.setOptions({
          headerShown: false,
          headerTinColor: "white",
          headerStyle:{
            backgroundColor: 'blue'
          }
        });
        loadTerebi();
    }, []);

    async function loadTerebi(){
        const response = await fetch('https://somoskudasai.com/categoria/noticias/cultura-otaku/rss');
        const responsedata = await response.text();
        const data = await rssParser.parse(responsedata);
        const d = data.items.map((title, link) =>{
          return{
            title: title.title,
            link: link.links
          }
        });
        setTerebi(d);
    }
    const Items = (props) => {
        return (
          <TouchableOpacity style={styles.item}>
            <Text style={{fontSize:24, color:"white"}}>{props.item.title}</Text>
          </TouchableOpacity>
        )
    };
  
    const renderItem = ({ item }) => {
        return(
        <Items item={item}/>
      )
    };

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
                    source={{uri:'https://i.postimg.cc/23sCFx2n/Categor-as.png'}}
                    style={{width: '90%', height:'20%'}}
                />
                <View>
                    <FlatList
                        data={terebi}
                        refreshing={loading}
                        onRefresh={loadTerebi}
                        renderItem={renderItem}
                    />
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
    containerrss: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#08AEF5',
        marginVertical: 3,
        marginHorizontal: 10,
        borderRadius: 10
    },
  });