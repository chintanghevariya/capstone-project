import React, {Component} from 'react';
import {Text,View,StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';



// const Container = [
//     {
//         fromLocationName : 'Toronto',
//         toLocationName : 'Vancouver',
//         ridePrice : '$20.00',
//         time : '10:00 AM',
//         numberOfSeats : 5,
//         ratings : 5,
//         numberOfStops : 6,
//     }
// ]



export class RideContainer extends Component {




    constructor(props) {
        super(props);
        this.state = {
         
            fromLocationName : 'Toronto',
            toLocationName : 'Vancouver',
            ridePrice : '$20.00',
            time : '10:00 AM',
            numberOfSeats : 5,
            ratings : 5,
            numberOfStops : 6,
          
        };
    }
    
   
        render() {
           
            return (
                <View style={Styles.container}>
                    <View style={Styles.parentContainer}>
                                        <View style={Styles.childContainer}>
                                        {/* <EvilIcons name={'location'} size={15}/> */}
                                            <Icon name="arrow-right"  />
                                            <Text style={{fontSize : 18, fontWeight: "bold"}}>{this.state.fromLocationName}</Text>
                                            <Icon name="arrow-right"  />
                                            <Text style={{fontSize : 18, fontWeight: "bold"}}>{this.state.fromLocationName}</Text>
                                            <Text style={{fontSize : 20}}>{this.state.ridePrice}</Text>
                                        </View>
                                            
                                        <View style={{borderBottomColor: '#F5F5F5',borderBottomWidth: 1,}} />
                                        
                                        <View style={Styles.childContainer}>
                                            <Icon name="arrow-right"  />
                                            <Text style={{fontSize : 15}}>{this.state.time}</Text>
                                            <Icon name="arrow-right"  />
                                            <Text style={{fontSize : 15}}>{this.state.numberOfSeats}</Text>
                                            <Icon name="arrow-right"  />
                                            <Text style={{fontSize : 15}}>{this.state.ratings}</Text>
                                            <Icon name="arrow-right"  />
                                            <Text style={{fontSize : 15}}>{this.state.numberOfStops}</Text>
                                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RideDetails')}} ><Text style={{color: '#0D92DD',}}>Details</Text></TouchableOpacity>
                                        </View>
                     </View>
                </View>
            );
        }
    }
    
    
const Styles = StyleSheet.create({

        container:{
            justifyContent:'center',
            
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
            height:100,
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
            marginTop:5,
        },
    
});
