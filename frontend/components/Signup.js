import React from "react";
import { Button, Input, Row } from 'native-base'
import {
  StyleSheet,  
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";
import  RadioForm from 'react-native-simple-radio-button';
import { flex } from "styled-system";

var radio_props = [
  {label: 'Driver', value: 0 },
  {label: 'Passenger', value: 1 }
];

export default class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          fnameValidate:false,
          lnameValidate:false,
          email:"",
          emailValidate:false,
          phonenumber:"",
          numValidate:false,
          password: "",
          passValidate:false,
          tempPassword:"",
          error:'',
          isError : false,
          submitButton : true,
          tempConfirmPassword:"",
          changedPassword:"",
        }
      }

      handleFirstName =(text)=>{
        if(text.trim() === ""){
          this.setState({
            error:"Please enter First Name",
            isError:true,
            submitButton:true,
            fnameValidate:false
          })
          return false
        }
        if(this.state.numValidate&&this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:false})
        }
        else{
          this.setState({
            isError:false,
            firstname:text,
            error:"",
            fnameValidate:true
          })
          return true
        }
    }

      handleLastName =(text)=>{
        if(text.trim() === ""){
          this.setState({
            error:"Please enter Last Name",
            isError:true,
            submitButton:true,
            lnameValidate:false
          })
          return false
        }
        if(this.state.numValidate&&this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:false})
        }
        else{
          this.setState({
            isError:false,
            lastname:text,
            error:"",
            lnameValidate:true,
          })
          return true
        }
    }
    handleEmail =(text)=>{
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(text)){
          this.setState({
            error:"Email is not valid",
            isError:true,
            submitButton:true,
            emailValidate:false
        })
        return false
        }

        if(this.state.numValidate && this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:false})
        }
        else{
          this.setState({
            isError:false,
            email:text,
            emailValidate:true,
            error:''
        }) 
        return true
        }
      }

      handleNumber =(text)=>{
        let pattern = new RegExp(/^[0-9\b]+$/);
        if(text === "")
        {
          this.setState({
            error:"Phone Number is not valid",
            isError:true,
            submitButton:true,
            numValidate:false
        })
        return false
        }
        if (!pattern.test(text)) {
          this.setState({
            error:"Only numbers are accepted!",
            isError:true,
            submitButton:true,
            numValidate:false
        })
          return false;
        }
        else if(text.length < 10){
          this.setState({
            error:"Enter valid phone number!",
            isError:true,
            submitButton:true,
            numValidate:false
        })
          return false;
        }
        if(this.state.numValidate && this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:false})
        }
        else{
          this.setState({
            isError:false,
            phonenumber: text,
            numValidate:true,
            error:'',
        }) 
        return true
        }
      }
      handlePassword =(text)=>{
        const{tempConfirmPassword} = this.state

        if(text === ""){
          this.setState({
            error:"Please Enter password !",
            isError:true,
            submitButton:true
        })
          return false;
        }
        else if (text.length < 6) {
            this.setState({
              error:"Must be at least 6 character.",
              isError:true,
              submitButton:true
          })
            return false
        }
        if(tempConfirmPassword!== text&&tempConfirmPassword!==""){
          this.setState({
            error:"Passwords does not match.",
            changedPassword:text,
            isError:true,
            submitButton:true,
            passValidate:false,
        })
          return false;
        }
        if(this.state.numValidate && this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:false})
        }
        else{
          this.setState({
            tempPassword:text,
            isError:false,
            error:""  
            }) 
        return true
        }
        
      }
      handleConfirmPassword=(text)=>{

        const{changedPassword} = this.state
        const{tempPassword} = this.state
        if(text.trim() === ""){
          this.setState({
            error:"Please Enter password!",
            isError:true,
            submitButton:true
        })
          return false;
        } 
        if(changedPassword==""){
         if(tempPassword!==text) {
          this.setState({
            error:"Passwords does not match.",
            isError:true,
            submitButton:true,
            passValidate:false
        })
          return false;
        }
        
      }
         if(changedPassword !== text&&changedPassword!==""){
          this.setState({
          error:"Passwords does not match.",
          password:text,
          tempConfirmPassword:text,
          isError:true,
          submitButton:true,
          passValidate:false
      })
        return false;

        }
      
        if(this.state.numValidate && this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:false})
        }
        else{
          this.setState({
            password:text,
            tempConfirmPassword:text,
            isError:false,
            passValidate:true,
            error:''    
            }) 
        return true
        }
      }
      
      handleSubmit=()=>{
        const{isError,error} = this.state
        if(isError){
            alert(`${error}`)
        }else{
            alert(` 
            -${this.state.firstname}
            -${this.state.lastname}
            -${this.state.email}
            -${this.state.phonenumber}
            -${this.state.password}
            -${radio_props}`)
        }
    }
      
    render(){   
    return (
      <SafeAreaView >
      <ScrollView>
      <View
      style={{flex:1}}
      showsVerticalScrollIndicator={false}>
        <ImageBackground
           source={require('../images/background.png')}
           style={
               {height:Dimensions.get('window')}.height
                }
           > 
        <View style={styles.container}>
        <Text style={styles.title}>Create an</Text><Text style={styles.title}>Account</Text>
            <Text>First Name</Text>
            <TextInput
                style={[styles.input]}
                placeholder="John"
                keyboardType="ascii-capable"
                onChangeText = {(value)=>this.handleFirstName(value)}
            />
            <Text>Last Name</Text>
            <TextInput
                style={[styles.input]}
                placeholder="Doe"
                keyboardType="ascii-capable"
                onChangeText = {(value)=>this.handleLastName(value)} 
            />
            <Text>Email</Text>
            <TextInput
                placeholder="johndoe@domain.com"
                keyboardType='email-address'
                autoCapitalize="none"
                style={[styles.input,
                this.state.emailValidate? styles.success : null]}
                onChangeText = {(value)=>this.handleEmail(value)} 
            />
            <Text>Phone Number</Text>
            <TextInput
                style={[styles.input]}
                type="number"
                placeholder="412-123-4567"
                keyboardType='numeric'
                onChangeText = {(value)=>this.handleNumber(value)}
                maxLength={10} 
            />
            <Text>Password</Text>
            <TextInput
                style={[styles.input]}
                placeholder="********"
                secureTextEntry={true}
                onChangeText = {(value)=>this.handlePassword(value)} 
                />
            <Text>Confirm Password</Text>
            <TextInput
                style={[styles.input]}
                placeholder="********"
                secureTextEntry={true}
                onChangeText = {(value)=>this.handleConfirmPassword(value)} 
                    />
            <Text>Role</Text>
            <RadioForm
                radio_props={radio_props}
                initial={0}
                formHorizontal={true}
                onPress={(value) => {this.setState({value:value})}}
                  />
            <Text style={styles.errMsg}>{this.state.error}</Text>
             <Button disabled={this.state.submitButton} // submitbtn value is true then the button will be disabled
              style={this.state.passValidate && this.state.emailValidate && this.state.numValidate
                && this.state.fnameValidate && this.state.lnameValidate? styles.enabled : styles.disabled}//passBtn and emailBtn helps the button to define the css to use if both are true then and then the css of enable will be applied
              onPress={()=> this.handleSubmit()}
              ><Text>Sign Up</Text></Button> 
              
        </View>
        </ImageBackground>
        </View>
        </ScrollView> 
        </SafeAreaView>


        );
    }
} 
const styles = StyleSheet.create({
  errMsg:{
    fontWeight:'bold',
    color:'red'
  },
  input: {
    height: 40,
    marginBottom:10,
    borderWidth: 1,
    padding: 10,
  },
  success:{
      borderColor:'#006400',
  },
    title:{
      fontSize:40,
      fontWeight:'bold',
      paddingBottom:5,
      marginBottom:10,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:30,
        paddingRight:30
    },
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
    role:{
        flexDirection: 'row',
        borderColor:'black',
        borderRadius:3,
    }
  })