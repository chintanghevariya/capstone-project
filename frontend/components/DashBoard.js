import React,{Component} from 'react';
import { Text, View,Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeComponents/Home';
import Search from './HomeComponents/Search';
import Chat from './HomeComponents/Chat';
import Notification from './HomeComponents/Notification';
import Profile from './HomeComponents/Profile';

const Tab = createBottomTabNavigator();
export default class Dash extends Component {
  render() {
    return (

        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon:({focused})=>(
              <View>
                <Image 
                source={require('../assets/icons/Home.png')}
                resizeMode= 'contain'
                style={{
                  width:90,
                  height:70
                }}
                />
              </View>
          )
          }}/>
          <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon:({focused})=>(
              <View>
                <Image 
                source={require('../assets/icons/Search.png')}
                resizeMode= 'contain'
                style={{
                  width:90,
                  height:70
                }}
                />
              </View>
          )
          }} />
          <Tab.Screen name="Chat" component={Chat} options={{
            tabBarIcon:({focused})=>(
              <View>
                <Image 
                source={require('../assets/icons/Chat.png')}
                resizeMode= 'contain'
                style={{
                  width:90,
                  height:70
                }}
                />
              </View>
          )
          }}/>
          <Tab.Screen name="Notification" component={Notification} 
          options={{
            tabBarIcon:({focused})=>(
              <View>
                <Image 
                source={require('../assets/icons/Notification.png')}
                resizeMode= 'contain'
                style={{
                  width:90,
                  height:70
                }}
                />
              </View>
          )
          }}/>
          <Tab.Screen name="Profile" component={Profile} 
          options={{
            tabBarIcon:({focused})=>(
              <View>
                <Image 
                source={require('../assets/icons/Profile.png')}
                resizeMode= 'contain'
                style={{
                  width:90,
                  height:70
                }}
                />
              </View>
          )
          }}/>
        </Tab.Navigator>
     )
  }
}