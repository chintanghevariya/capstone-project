import React, { Component } from 'react'
import { Button } from 'native-base'
import axios from 'axios';
import {Alert,View, Text, ImageBackground ,TouchableOpacity, Dimensions, StyleSheet, TextInput } from 'react-native'
import Loading from './Loading';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            emailValidate:false,
            passValidate:false,
            error:'',
            submitBtn:true,
            isLoading:false,
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail=(text)=>{
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(text)){
            this.setState({
                error:"Please enter valid email",
                emailValidate:false,
                submitBtn:true
            })
            return false
        }
        else{
            this.setState({
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
                submitBtn:true
            })
            return false
        }
        else if(this.state.emailValidate){
                this.setState({
                password:text,
                submitBtn:false,
                passValidate:true,
                error:''    
                }) 
            return true
        }
    }
    handleSubmit = async (e) => {
        const{error,email,password} = this.state
        if(this.state.emailValidate && this.state.passValidate){
            try {
                const config={
                    headers:{
                        "Content-type":"application/json"
                    }
                }
                this.setState({isLoading:true})
                const {data} = await axios.post(
                    `http://localhost:4000/users/login`,
                    {
                        email, // R@P.com   
                        password,// Rutik123
                    },
                    config
                );  
                this.setState({isLoading:false})
                this.props.navigation.navigate('DashBoard')
                
            } catch (e) {
                this.setState({
                    error:e.response.data.error,
                })
                this.setState({isLoading:false}) 
            }
        }
       else{
           Alert.alert("Something went wrong")
           this.setState({isLoading:false})
       }
    }
    render(){
        return (
        <>
        <ImageBackground
                source={require('../assets/login.png')}
                style={
                    {height:Dimensions.get('screen')}.height
                }
            >
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                    <TextInput placeholder={"Enter your Email"}
                    returnKeyType ="next"
                    autoCapitalize='none'
                    style={[styles.input,
                        !this.state.emailValidate? null : styles.success]}
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
                    <View style={{ width : "80%"}}>
                        <Button disabled={this.state.submitBtn} // submitbtn value is true then the button will be disabled
                            style={this.state.passValidate && this.state.emailValidate? styles.enabled : styles.disabled}//passBtn and emailBtn helps the button to define the css to use if both are true then and then the css of enable will be applied
                            onPress={()=> this.handleSubmit()}
                            >Login</Button>
                            <Text></Text>

                        <Button style={styles.btn2}>forgot password </Button>
                    
                        <View style={styles.signupTextCont}>
                            <Text style={styles.signupText}>Don't have account yet?</Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}><Text style={styles.signupButton}> Sign Up</Text></TouchableOpacity>
                        </View> 
                    </View>
                </View>
            {this.state.isLoading?<Loading/>:null}
        </ImageBackground>
        </>
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
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column" 
    },
    signupTextCont:{
        flexGrow:1,
        alignItems : "center",
        paddingVertical:20,
        alignSelf : "center",
        justifyContent:"flex-end",
        flexDirection:"row"
    },
    signupText:{
        fontSize:16,
    },
    signupButton:{
        fontSize:20,
        justifyContent : "center",
        alignSelf : "center",
        fontWeight:'500',
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

