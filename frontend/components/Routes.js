import React,{useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Signup from '../components/Signup';
import DashBoard from '../components/DashBoard';
import SplashScreen from './SplashScreen';
import {getToken} from '../helpers/Token';

const Stack = createNativeStackNavigator();

export default function Routes(){
   const [token, setToken] = useState(null)
   useEffect(() => {
      getToken().then((value) => setToken(value))
   }, [])   
      return(
         <NavigationContainer navigationOptions= {{gesturesEnabled: false}}>
             <Stack.Navigator
               screenOptions={{
                  headerShown: false
               }}
               >
               <Stack.Screen name="SplashScreen" component={SplashScreen} options={{gestureEnabled: false }} /> 
               <Stack.Screen name="Login" component={Login} options={{gestureEnabled: false }}/>  
               <Stack.Screen name="Signup" component={Signup} options={{gestureEnabled: false }}/>  
               {
               token !== null ?
               <>
               <Stack.Screen name="DashBoard" component={DashBoard}/> 
               </>
               :
               null
               }
            </Stack.Navigator>
         </NavigationContainer>
      )
   }



