import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

const apiKey = '929de87e9eaae9cae257b0aee7f54e31Y'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    });

    useEffect(() => {
        console.log(`fetching data with zipCode = 83120`)
     if (props.zipCode) {              

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
return (
    <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '200%',
        height: '200%'
    },
});
