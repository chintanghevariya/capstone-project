import React, { Component } from 'react'
import { Button, StatusBar } from 'native-base'
import {View, ScrollView, Text, ImageBackground , Dimensions, StyleSheet, TextInput } from 'react-native'

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            emailValidate:false,
            passValidate:false,
            error:'',
            isError:false,
            submitBtn:true
        }
    }

    
    handleEmail=(text)=>{
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(text)){
            this.setState({
                error:"Please enter valid email",
                isError:true,
                emailValidate:false,
                submitBtn:true
            })
            return false
        }
        else{
            this.setState({
                isError:false,
                email:text,
                emailValidate:true,
                submitBtn:false,
                error:''
            }) 
            return true
        }
    }
    handlePassword=(text)=>{
        if(text === ""){
            this.setState({
                error:"Password field can not be empty",
                passValidate:false,
                isError:true,
                submitBtn:true
            })
            return false
        }
        else if(this.state.emailValidate){
                this.setState({
                password:text,
                isError:false,
                submitBtn:false,
                passValidate:true,
                error:''    
                }) 
            return true
        }
    }

    handleSubmit=()=>{
        const{isError,error} = this.state
        if(this.state.emailValidate && this.state.passValidate){
            alert("Success")
        }
        else if(isError){
            alert(`${error}`)
        }else{
            alert("errr")
        }
    }
    render(){
        return (
           <View
            style={{flex:1, backgroundColor:'#ffffff'}}
            showsHorizontalScrollIndicator={false}>
                {/* <StatusBar style='dark'/> */}
                <ImageBackground
                    source={require('../images/login.png')}
                    style={
                        {height:Dimensions.get('screen')}.height
                    }
                >
            <View style={styles.view}>
                <Text style={styles.heading}>Login</Text>
                    <TextInput placeholder={"Enter your Email"}
                    returnKeyType ="next"
                    autoCapitalize='none'
                    style={[styles.input,
                        !this.state.emailValidate? styles.error : styles.success]}
                    onChangeText={(text)=>this.handleEmail(text)}
                    />
                    <TextInput placeholder = {"Enter your password"}
                    returnKeyType ="go"
                    secureTextEntry={true}
                    onChangeText={(text)=>this.handlePassword(text)}
                    style={{ height: 42 , width : "80%" , borderBottomWidth : 1, marginTop : "5%"}}
                    />
                    <Text></Text>
                    <Text style={styles.errMsg}>{this.state.error}</Text>
                    <View style={{marginTop : "10%" , width : "80%"}}>
                        <Button disabled={this.state.submitBtn} // submitbtn value is true then the button will be disabled
                            style={this.state.passValidate && this.state.emailValidate? styles.enabled : styles.disabled}//passBtn and emailBtn helps the button to define the css to use if both are true then and then the css of enable will be applied
                            onPress={()=> this.handleSubmit()}
                            >Login</Button>
                            <Text></Text>
                        <Button style={styles.btn2}>forgot password ?</Button>
                    </View>
            </View>
        </ImageBackground>
        </View>
        )
    }

}

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
        opacity:0.5,
        color:'black'
    },

    input:{
        borderColor:'black',
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
    },
    error:{
        borderColor:'red',
        height: 42 , 
        width : "80%" , 
        borderBottomWidth : 1, 
        marginTop : "5%"
    },
    success:{
        borderColor:'#006400',
        height: 42 , 
        width : "80%" , 
        borderBottomWidth : 1, 
        marginTop : "5%"
    },
    errMsg:{
        fontWeight:'bold',
        color:'red'
    }
})
