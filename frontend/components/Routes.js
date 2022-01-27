import React,{Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import Signup from '../components/Signup';
import DashBoard from '../components/DashBoard'

const Stack = createNativeStackNavigator();

export default class Routes extends Component{
   render(){
      return(
         <NavigationContainer>
             <Stack.Navigator
               screenOptions={{
                  headerShown: false
               }}
               >
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Signup" component={Signup} />
               <Stack.Screen name="DashBoard" component={DashBoard} />
            </Stack.Navigator>
         </NavigationContainer>
      )
   }
}


