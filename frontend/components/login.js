import React, { Component } from 'react'
import { Button } from 'native-base'
import {View, ScrollView, Text, ImageBackground , Dimensions, StyleSheet, TextInput } from 'react-native'

const emailState = {
    email : '',
    error : ''
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#21A656',
        justifyContent : "center",
        alignItems : "center",
        width : '100%',
        alignSelf : "center",
        textAlign : "center"
    },

    input:{
        height: 42 , 
        width : "80%" , 
        borderBottomWidth : 1, 
        marginTop : "5%"
    },
    btn2:{
        backgroundColor:'#010101',
        justifyContent : "center",
        alignItems : "center",
        width : '100%',
        color:'black',
        alignSelf : "center",
        textAlign : "center"
    },

    view:{
        width : "100%", 
        height : "100%", 
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center",
        alignItems:"center" 
    },
    heading:{
        color:'#000000',
        fontSize:42,
        alignSelf : "center",
        textAlign : "center"
    }
})

export default class login extends Component {

    constructor(){
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            email : e.target.value,
            password : e.target.value
        });
    }

    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            alert("please enter email ID in correct format")
            return false;
        }
        return true;
    }

    validate_field=()=>{
        const {email, password} = this.state

        if(email == ""){
            alert("please fill email ID")
            return false
        }else{
            if(password == ""){
                alert("please fill password")
                return false
            }else{
            if(this.emailValidation()){
                alert("success")
                return true
            }
        }
    }
    }

    render(){
        return (
           <ScrollView
            style={{flex:1, backgroundColor:'#ffffff'}}
            showsHorizontalScrollIndicator={false}>
                <ImageBackground
                    source={require('../images/login.png')}
                    style={
                        {height:Dimensions.get('window')}.height
                    }
                >
            <View style={styles.view}>
            <Text style={styles.heading}>Login</Text>
            <TextInput placeholder={"Enter your Email"}
            onChangeText={(value)=> this.setState({email : value})}
            style={styles.input}
            />
            <TextInput placeholder = {"Enter your password"}
            onChangeText={(value)=> this.setState({password: value})}
            style={{ height: 42 , width : "80%" , borderBottomWidth : 1, marginTop : "5%"}}
            />
            <View style={{marginTop : "10%" , width : "80%"}}>
            <Button style={styles.button} 
            onPress={()=> this.validate_field()}>Click Here</Button>
            <Text></Text>

            <Button style={styles.btn2}>forgot password ?</Button>
            </View>
        </View>
        </ImageBackground>
        </ScrollView>
        )
    }

}
