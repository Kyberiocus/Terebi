import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './screens/Login';
import Terebi from './screens/Terebi';
import TerebiCatego from './screens/TerebiCatego';
import TerebiBusca from './screens/TerebiBusca';
import TerebiAnime from './screens/TerebiAnime';
import TerebiCulturaOtaku from './screens/TerebiCulturaOtaku';
import TerebiJapon from './screens/TerebiJapon';
import TerebiManga from './screens/TerebiManga';
import TerebiMercan_Figu from './screens/TerebiMercan_Figu';
import TerebiNovelasLigeras from './screens/TerebiNovelasLigeras';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Terebi" component={Terebi}/>
        <Stack.Screen name="TerebiCatego" component={TerebiCatego}/>
        <Stack.Screen name="TerebiBusca" component={TerebiBusca}/>
        <Stack.Screen name="TerebiAnime" component={TerebiAnime}/>
        <Stack.Screen name="TerebiCulturaOtaku" component={TerebiCulturaOtaku}/>
        <Stack.Screen name="TerebiJapon" component={TerebiJapon}/>
        <Stack.Screen name="TerebiManga" component={TerebiManga}/>
        <Stack.Screen name="TerebiMercan_Figu" component={TerebiMercan_Figu}/>
        <Stack.Screen name="TerebiNovelasLigeras" component={TerebiNovelasLigeras}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}