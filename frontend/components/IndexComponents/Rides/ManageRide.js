import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import { getRides } from '../../../api/rides';
import { RideContainer } from './RideContainer';
import { renderNode } from 'react-native-elements/dist/helpers';

export default function ManageRide() {

  return(
      
    
  
    <SafeAreaView style={Styles.container}>
    <ScrollView>
    <View>
        <TouchableOpacity
        style={Styles.button}
        onPress={() => {
            alert('Post a Ride Page');
        }}
        // onPress={()=>this.props.navigation.navigate('PostRide')}
        underlayColor='#fff'>
        <Text style={Styles.buttonText}> + Post New Ride </Text>
        </TouchableOpacity>
    
        <View></View>
        <View style={Styles.containerViewAll}> 
                <View style={Styles.box}>
                    <Text>Upcoming Rides</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AllRides')}} ><Text style={{color: '#0D92DD',}}>View All</Text></TouchableOpacity>
                        </View>
                        <View style={{borderBottomColor: '#CCCCCC',borderBottomWidth: 1,}} />
                        <RideContainer
                        fromLocationName = 'Toronto'
                        toLocationName = 'Vancouver'
                        ridePrice = '20.00'
                        time ='10:00 AM'
                        numberOfSeats = '5'
                        ratings ='5'
                        numberOfStops = '6' />
                        <RideContainer 
                        fromLocationName = 'Toronto'
                        toLocationName = 'Vancouver'
                        ridePrice = '20.00'
                        time ='10:00 AM'
                        numberOfSeats = '5'
                        ratings ='5'
                        numberOfStops = '6'/>
        </View>    


        <View></View>
            <View style={Styles.containerCompleted}> 
                <View style={Styles.box}> 
                    <Text>Completed Rides</Text>
                    <TouchableOpacity onPress={()=>{alert('View All');}}><Text style={{color: '#0D92DD',}}>View All</Text></TouchableOpacity> 
                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('CompletedRides')}><Text style={{color: '#0D92DD', textDecorationLine: 'underline'}}>View All</Text></TouchableOpacity> */}
                </View>
                <View style={{ borderBottomColor: '#CCCCCC',borderBottomWidth: 1, }}/>
                <RideContainer 
                fromLocationName = 'Toronto'
                toLocationName = 'Vancouver'
                ridePrice = '20.00'
                time ='10:00 AM'
                numberOfSeats = '5'
                ratings ='5'
                numberOfStops = '6'/>
                <RideContainer 
                fromLocationName = 'Toronto'
                toLocationName = 'Vancouver'
                ridePrice = '20.00'
                time ='10:00 AM'
                numberOfSeats = '5'
                ratings ='5'
                numberOfStops = '6'/>
                <RideContainer fromLocationName = 'Toronto'
                toLocationName = 'Vancouver'
                ridePrice = '20.00'
                time ='10:00 AM'
                numberOfSeats = '5'
                ratings ='5'
                numberOfStops = '6' />
            </View>

    </View>
    </ScrollView>
    </SafeAreaView>
);
    }


const Styles = StyleSheet.create({

            container:{
                justifyContent:'center',
                flex:1
            },
            button:{
                marginRight:40,
                marginLeft:40,
                marginTop:80,
                paddingTop:10,
                paddingBottom:10,
                backgroundColor:'#2265C9',
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
            containerViewAll:{
                flex:2,
                marginLeft:20,
                marginRight:20,
            },
            containerCompleted:{
                flex:3,
                marginLeft:20,
                marginRight:20,
            },
            box:{
                padding:20,
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            childContainer:{
                height:"50%",
                padding:10,
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
                },
            parentContainer:{
                backgroundColor:'#fff',
                height:"25%",
                borderWidth: 1,
                borderRadius: 1,
                borderColor: '#fff',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                elevation: 1,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 10,
            },


            })
