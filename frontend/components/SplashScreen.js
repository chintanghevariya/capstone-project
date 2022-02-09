import React, { Component, useEffect } from 'react';
import { Alert,ImageBackground,View,Image,Linking, StyleSheet,TouchableOpacity,Text } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants'
import * as IntentLauncher from 'expo-intent-launcher'

export default function SplashScreen({navigation}) {
    const pkg = Constants.manifest.releaseChannel
        ? Constants.manifest.android.package
        : 'host.exp.exponent'

    const toSetting = () => {
        if (Platform.OS === 'ios') {  // open setting in ios for location
            Linking.openURL('app-settings:')
        } else {
            IntentLauncher.startActivityAsync(
                IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
                { data: 'package:' + pkg },
            )
        }
    }

    const locationPermission = async()=>{
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Error',
            'Permission to access location was denied',
            [
                { text: 'Allow', onPress: toSetting },
            ]);
        }
    }
    useEffect(()=>{
        locationPermission()
    })
        return (
            <View
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <ImageBackground source={require('../assets/login.png')}
                    style={
                        [Styles.imgBackground, { height: '100%', width: '100%' }]
                    }>
                    <View style={Styles.container}>
                        <Image resizeMode={'contain'} source={require('../assets/Home.png')}
                            style={Styles.img} />

                        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }} style={Styles.btn}><Text style={Styles.text}>Get Started</Text></TouchableOpacity>
                        <View style={Styles.signupTextCont}>
                            <Text style={Styles.signupText}>Already have account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={Styles.signupButton}> Login</Text></TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }

const Styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'column',
        minHeight: 100,
        alignContent:'center',
    },
    imgBackground:{
        alignSelf:'center',
    },
    img:{
        marginTop:'25%',
        marginRight:'5%',
        alignSelf:'center',
        height:'60%',
        width:'100%'
    },
    btn:{
        marginLeft:'5%',
        marginRight:'5%',
        backgroundColor:'#21A656',  
        borderRadius:5     
    },
    text:{
        paddingVertical:'1.8%',
        alignSelf:'center',
        opacity:0.7
    },
    signupTextCont:{
        paddingVertical:'15%',
        alignSelf : "center",
        flexDirection:"row"
    },
    signupButton:{
        fontWeight:'700',
        color:'orange',
    }

})
