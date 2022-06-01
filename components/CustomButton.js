import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function CustomButton(props) {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.color,
            width: 150,
            height: 55,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center'
        }} onPress={props.action}>
            <Text style={{fontSize: 24, color: 'white'}}>{props.text}</Text>
        </TouchableOpacity>
    ); 
}