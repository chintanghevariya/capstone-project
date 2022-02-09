import React, { Component } from 'react';
import { View,StyleSheet,Text,Button,Image,TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';

export const delete_Token_user = (navi) => {
  AsyncStorage.removeItem('user').then(
    SecureStore.deleteItemAsync('token').then(
      navi.navigate('Login')))
}

export default function Profile({navigation}){


    return (
        <View style={Styles.container}>
            <Text>Profile</Text>
        <TouchableOpacity onPress={()=>delete_Token_user(navigation)}><Text style={Styles.icon}> Sign out</Text></TouchableOpacity>
        </View>
    );
  }
const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
})


