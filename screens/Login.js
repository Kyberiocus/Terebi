import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function App({ navigation }) {

  useEffect(function(){
    navigation.setOptions({
      headerShown: false
    });
  });

  const [username, setUsername] = useState("Mundo");
  const [password, setPassword] = useState("");
  
  const imageBG = {uri: 'https://i.postimg.cc/5fKLXvNF/BG-blue.png'}

  async function login(){
    const data ={
      user: username,
      pass: password
    }

    console.log(data);

    try {
      await AsyncStorage.setItem("data", JSON.stringify(data));
      console.log("Se guardaron los datos", data);
    }
    catch(e){
      console.log(e);
    }
    navigation.navigate("Terebi");
  }

  return (
    <View style={styles.container}>
        <ImageBackground 
          source={{uri:'https://i.postimg.cc/5fKLXvNF/BG-blue.png'}}
          style={{width: '100%', height:'100%', justifyContent: 'center', alignItems:'center'}}>
          <Image source={{uri:'https://i.postimg.cc/L8gXYJNz/Logo.png'}} style={{width:'100%',height:'30%',justifyContent: 'center', alignItems:'center',marginBottom: 10}}></Image>
            <TextInput 
              onChangeText={setUsername} 
              style={styles.input_login}
              placeholder="Usuario..."/>
            <TextInput 
              onChangeText={setPassword}
              style={styles.input_login}
              secureTextEntry={true}
              placeholder="Contraseña..."/>
          <CustomButton text={"Iniciar sesión"} color="#08AEF5" action={login}/>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  input_login: {
    width: '90%',
    height: 60,
    borderColor: '#08AEF5',
    borderWidth: 2,
    borderRadius: 6,
    fontSize: 20,
    backgroundColor: 'white',
    paddingLeft: 12,
    marginBottom: 30
  },
  login_header: {
    fontSize: 40,
    color: 'white', 
    marginBottom: 40,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  }
});