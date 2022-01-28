import React,{Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from '../components/Signup';
import DashBoard from '../components/DashBoard';
import SplashScreen from './SplashScreen';

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
               <Stack.Screen name="SplashScreen" component={SplashScreen} />
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Signup" component={Signup} />
               <Stack.Screen name="DashBoard" component={DashBoard} />
            </Stack.Navigator>
         </NavigationContainer>
      )
   }
}


