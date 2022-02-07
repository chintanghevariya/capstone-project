import React, {Component} from 'react';
import {Text,View,StyleSheet, TouchableOpacity, Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';


export class RideContainer extends Component {




    constructor(props) {
        super(props);
        this.state = {
         
            fromLocationName : '',
            toLocationName : '',
            ridePrice : '',
            time : '',
            numberOfSeats :'',
            ratings : '',
            numberOfStops : '',

          
        };
    }

     myCar = <Icon name="car" size={20} />;
     myArrow = <Ionicons name="ray-start-arrow" size={20} />;
     map = <Icon name="map-marker" size={18}/>;
     arrow = <Ionicons name="ray-start-arrow" size={25}/>
     clock = <Icon name="clock-o" color={'orange'} size={16}/>;
     seat = <Ionicons name="seat" size={16}/>
     star = <Icon name="star" size={16}/>
     flag = <Icon name="flag" size={16}/>
     dollar =<Icon name ="dollar" size={16}/>
    check = <Icon  name = "Check" size ={16} color = {'green'}/>
    
    
   
        render() {
           
            return (
                <View style={Styles.container}>
                    <View style={Styles.parentContainer}>
                                        <View style={Styles.childContainer}>

                                            <Text style={{fontSize : 18, fontWeight: "bold"}}>{this.map} {this.props.fromLocationName}</Text>
                                            <Text>{this.myArrow}</Text>
                                            <Text style={{fontSize : 18, fontWeight: "bold"}}>{this.map} {this.props.toLocationName}</Text>
                                            <Text style={{fontSize : 20}}>{this.dollar} {this.props.ridePrice}</Text>
                                        </View>
                                            
                                        <View style={{borderBottomColor: '#F5F5F5',borderBottomWidth: 1,}} />
                                        
                                        <View style={Styles.childContainer}>
                                       
                                            <Text style={{fontSize : 15}}>{this.clock} {this.props.time}</Text>
                                            <Text style={{fontSize : 15}}>{this.seat} {this.props.numberOfSeats}</Text>
                                            <Text style={{fontSize : 15}}>{this.star} {this.props.ratings}</Text>
                                            <Text style={{fontSize : 15}}>{this.flag} {this.props.numberOfStops}</Text>
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
