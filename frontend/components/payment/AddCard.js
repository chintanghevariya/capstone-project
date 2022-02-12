import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import {Button,Input} from 'native-base'


export default function AddCard() {

    const [fullName,setFullName] = useState("");
    const [cardNumber,setCardNumber] = useState("");
    const [expDate,setExpDate] = useState("");
    const [cvv,setCVV] = useState("");
    const [zipCode,setZipCode] = useState("");

    const [fullNameValidate,setFullNameValidate] = useState(false);
    const [cardNumberValidate,setCardNumberValidate] = useState(false);
    const [expDateValidate,setExpDateValidate] = useState(false);
    const [cvvValidate,setCVVValidate] = useState(false);
    const [zipCodeValidate,setZipCodeValidate] = useState(false);


    const handleFullName = (text)=>{
        if(text.trim() === ""){
            setError("Please Enter Full Name!"),
            setFullNameValidate(false)
        return false
        }
        else{
            setFullName(text)
            setFullNameValidate(true)
            setError('')
        return true
        }
    }

    const handleCardNumber= (text)=>{
        if(text.trim() === ""){
            setError("Please Enter Card Number!"),
            setCardNumberValidate(false)
        return false
        }
        else{
            setCardNumber(text)
            setCardNumberValidate(true)
            setError('')
        return true
        }
    }
    const handleExpDate = (text)=>{
        if(text.trim() === ""){
            setError("Please Enter Expiry Date!"),
            setExpDateValidate(false)
        return false
        }
        else{
            setExpDate(text)
            setExpDateValidate(true)
            setError('')
        return true
        }
    }
    const handleCVV = (text)=>{
        if(text.trim() === ""){
            setError("Please Enter CVV Number"),
            setCVVValidate(false)
        return false
        }
        else{
            setCVV(text)
            setCVVValidate(true)
            setError('')
        return true
        }
    }
    const handleZipCode = (text)=>{
        if(text.trim() === ""){
            setError("Please Enter Zip Code"),
            setZipCodeValidate(false)
        return false
        }
        else{
            setZipCode(text)
            setZipCodeValidate(true)
            setError('')
        return true
        }
    }
    const handleAddCard = async (e) =>{

    }

  return (
      <SafeAreaView style={Styles.container}>
          <ScrollView>
            <View>
                <Text style={{ fontSize: 40, marginLeft:35, marginBottom:30,  fontWeight: "bold"}}>Add Card</Text>
             </View>
            
            <View
                    style={{ borderBottomColor: "#CCCCCC", borderBottomWidth: 1,  shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,}}
            />

                <View style={{ marginLeft:35, marginRight: 35, marginTop: 35 }}>
                            <Text style={Styles.textLable}>Full Name</Text>
                            <Input style={Styles.input} placeholder={"John Doe"}
                                    autoCapitalize='none'
                                    onChangeText = {(text) => handleFullName(text)}/>
                                    <View style = {{padding:8,}}></View>

                            <Text style={Styles.textLable}>Card Number</Text>
                            <Input style={Styles.input} placeholder={"XXXX-XXXX-XXXX-XXXX"}
                                    autoCapitalize='none'
                                    onChangeText = {(text) => handleCardNumber(text)}/>
                                    <View style = {{padding:8,}}></View>

                            <View style = {{flexDirection: 'row',justifyContent: 'space-between'}}>
                                <Text style={Styles.textLable}>Exp. Date</Text>  
                                <Text style={Styles.textLable}>CVV</Text>  
                            </View>

                            <View style = {{padding:1,flexDirection: 'row',justifyContent: 'space-between',alignItems: "center",}}>  
                                <Input style={{width:'40%',}} placeholder={"MM/YY"}
                                    autoCapitalize='none'
                                    onChangeText = {(text) => handleExpDate(text)}/>
                                <Input style={{width:'40%',}} placeholder={"***"}
                                    autoCapitalize='none'
                                    onChangeText = {(text) => handleCVV(text)}/>
                            </View>
                            <View style = {{padding:8,}}></View>

                            <Text style={Styles.textLable}>Zip Code</Text>
                            <Input style={Styles.input} placeholder={"XYZ-123"}
                                    autoCapitalize='none'
                                    onChangeText = {(text) => handleZipCode(text)}/>
                                    <View style = {{padding:8,}}></View>

                            <Button style={Styles.enabled} onPress={()=>handleAddCard()}>Add New Card</Button>
                </View>
            
          </ScrollView>
      </SafeAreaView>
  );
    }


const Styles = StyleSheet.create({
    container:{
        marginTop:80,
     
        justifyContent:'center',
        flex:1
    },
    button:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        marginBottom: 20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#21A656',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    textLable:{
        marginTop : "5%",
    
      },
    
    con:{
        alignItems: "center",
        padding:10,
        justifyContent: 'space-between',
    },
    recentTrans:{
        justifyContent:'center',
        padding:10,
    },

    enabled:{
        marginTop:20,
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
     

            })
