import React from 'react';
import {TouchableOpacity, Image} from "react-native";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function CustomButtonRss(props) {
    return (
        <TouchableOpacity style={{
            width: 170,
            height: 130,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
        }} onPress={props.action}>
            <Image style={{width:170,height:130, paddingBottom:50}} source={{uri:props.link}}/>
        </TouchableOpacity>
    ); 
}