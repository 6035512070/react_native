import React from 'react';
import { View, Text , StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View >
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    center : {
        alignItems : 'center',
    },
    medium: {
        frontSize : 50,
        color : '#FFF',
        marginTop :30
    },
        small :{
            frontSize:30,
            color:'#FFF',
            marginTop:30,
        }
   
})
