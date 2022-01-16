import React, { Component } from 'react'
import { Button, StatusBar } from 'native-base'
import {View, ScrollView, Text, ImageBackground , Dimensions, StyleSheet, TextInput } from 'react-native'


const styles = StyleSheet.create({
    enabled:{
        backgroundColor:'#21A656',
        justifyContent : "center",
        alignItems : "center",
        width : '100%',
        alignSelf : "center",
        textAlign : "center",
    },
    disabled:{
        backgroundColor:'#90d3ab',
        justifyContent : "center",
        alignItems : "center",
        width : '100%',
        alignSelf : "center",
        textAlign : "center",
        opacity:0.2,
        color:'black'
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
        this.state = {
            emailBtn:false,
            passBtn:false,
            submitBtn:true
        }
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
                alert("please fill password"),
                this.setState({emailBtn:false})  //disable the login buton if there any error in validation
                return false
            }else{
            if(this.emailValidation()){
                alert("success")
                return true
            }
        }
    }
    }
    readEmail=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            emailBtn : true,
            submitBtn:false
        })
    }
    readPassword=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            passBtn : true,
            submitBtn:false
        })
    }

    render(){
        return (
           <ScrollView
            style={{flex:1, backgroundColor:'#ffffff'}}
            showsHorizontalScrollIndicator={false}>
                <StatusBar style='dark'/>
                <ImageBackground
                    source={require('../images/login.png')}
                    style={
                        {height:Dimensions.get('window')}.height
                    }
                >
            <View style={styles.view}>
                <Text style={styles.heading}>Login</Text>
                    <TextInput placeholder={"Enter your Email"}
                    name = 'email'
                    onChange={this.readEmail}
                    style={styles.input}
                    />
                    <TextInput placeholder = {"Enter your password"}
                    secureTextEntry={true}
                    name = 'password'
                    onChange={this.readPassword}
                    style={{ height: 42 , width : "80%" , borderBottomWidth : 1, marginTop : "5%"}}
                    />
                    <View style={{marginTop : "10%" , width : "80%"}}>
                        <Button disabled={this.state.submitBtn} // submitbtn value is true then the button will be disabled
                            style={this.state.passBtn && this.state.emailBtn? styles.enabled : styles.disabled}//passBtn and emailBtn helps the button to define the css to use if both are true then and then the css of enable will be applied
                            onPress={()=> this.validate_field()}>Login</Button>
                        <Text></Text>

                        <Button style={styles.btn2}>forgot password ?</Button>
                    </View>
            </View>
        </ImageBackground>
        </ScrollView>
        )
    }

}
