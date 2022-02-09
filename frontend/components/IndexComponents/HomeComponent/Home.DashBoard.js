import React, { useState, useEffect } from 'react';
import {View,Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import { Button, ScrollView } from 'native-base';
import {GetCurrentLocation} from './GetCurrentLocation';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getUser } from "../../../helpers/user"
import { getRides } from '../../../api/rides';

export default function DashBoard({navigation}) {
    const[location,setLocation] =useState({})
    const[user,setUser] = useState({})
    const[rides,setRides] = useState([{}])

    const myCar = <Icon name="car" size={20} />;
    const myArrow = <Icon name="arrow-right" size={20} />;
    const map = <Icon name="map-marker" size={18}/>;
    const arrow = <Ionicons name="ray-start-arrow" size={25}/>
    const clock = <Icon name="clock-o" color={'orange'} size={16}/>;
    const seat = <Ionicons name="seat" size={16}/>
    const star = <Icon name="star" size={16}/>
    const flag = <Icon name="flag" size={16}/>

    const list = () => {
        try{
        return rides.map((element) => {
            return (
                <View key={element._id}>
                    <View>
                        <View style={Styles.backgroundContainer}>
                            <View style={Styles.childContainer}>                                
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}> {map} {element.from['locationName']}</Text>
                                <Text> {arrow} </Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}> {map} {element.to['locationName']}</Text>
                                <Text style={{ fontSize: 20,marginRight:5 }}>${element.pricePerSeat}</Text>
                            </View>
                            <View style={{ borderBottomColor: '#F5F5F5', borderBottomWidth: 1, }} />
                            <View style={Styles.childContainer}>
                                <Text style={{ fontSize: 16 }}> {clock} {element.startDateAndTime}</Text>
                                <Text style={{ fontSize: 16 }}> {seat} {element.numberOfSeats}</Text>
                                <Text style={{ fontSize: 16 }}> {star} 2</Text>
                                <Text style={{ fontSize: 16 }}> {flag} {element.stops.length}</Text>
                                <TouchableOpacity onPress={() => { navigation.navigate('RideDetails') }} ><Text style={{ color: '#0D92DD', }}>Details</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            );
        });   
    }
        catch(e){
            alert(JSON.stringify(e.message))
        }  
        
    };
    // setUser(getUser())
    // to access the lattitude and longitude the use location.lat and location.long 
    useEffect(() => { 
        getRides().then((response) => {
            const [result, error] = response;
            if (error) {
                alert(error);
                return;
            }
            setRides(result.data.data);
        });    
        GetCurrentLocation().then((value) => setLocation(value));   
        getUser().then((value)=>setUser(value))
    }, []) 
  return(
      <ScrollView style={Styles.container}>
          
            <View style={Styles.header}>
                <View style = {Styles.welcome}>
                    <Text>Welcome</Text>
                    <Text style={Styles.userName}>{user.firstName} {user.lastName}</Text>
                </View>
                <View style = {Styles.wallet}>
                    <Text>Wallet</Text>
                </View>
            </View>
          <View style={Styles.background}>
              <Text style={[Styles.containerText,{marginTop : '2%'}]}>Next ride</Text>
              <Text style={Styles.containerText}>in 0000 hours</Text>
                <View style={Styles.backgroundContainer}>
                  <TouchableOpacity><Text>Details</Text></TouchableOpacity>
                </View>
          </View>
          <View style={Styles.manageRide}>
              <Text style={Styles.manageRideText}> {myCar} Manage Rides</Text>
              <Text style={Styles.manageRideText}> {myArrow} </Text>
          </View>
          <Text style={{marginLeft:20,fontSize:20}}>Rides around you</Text>
          
            {list()}
          
      </ScrollView>
  )
}

const Styles = StyleSheet.create({
    container: {
        margin:'1%',
        width:'100%'
    },
    header: {
        flex: 1,
        flexDirection:'row',
    },
    welcome:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight:"55%",
        marginLeft: '1%',
    },
    userName:{
        fontSize:26,
        fontWeight:"700",
    },
    background:{
        backgroundColor: '#21A656',
        height:100,
        borderRadius: 4,
    },
    backgroundContainer:{
        margin: 10,
        borderWidth: 0.4,
        backgroundColor: '#FFFFFF',
        height:100,
        shadowColor: '#000000',
        borderRadius: 3,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    containerText:{
        marginLeft: '2%',
        color: "white",
        fontWeight:'500'
    },
    manageRide:{
        flexDirection: 'row',
        alignContent:'center',
        marginTop:'20%',
        margin:'10%',
        borderWidth:0.4,
        backgroundColor: '#FFFFFF',
        justifyContent:'space-between',
        shadowColor: '#000000',
        height:40,
        borderRadius: 3,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    manageRideText:{
        alignSelf:'center'
    },
    childContainer: {
        height: "50%",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
   
})
