import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import Signup from "../components/Signup";
import DashBoard from "../components/DashBoard";
import SplashScreen from "./SplashScreen";
import { getToken } from "../helpers/Token";
import ChatScreen from "./IndexComponents/ChatScreen";
import { AuthContext } from "../context/AuthContext";
import PostRide from "./IndexComponents/HomeComponent/PostRide";

const Stack = createNativeStackNavigator();

export default function Routes() {
    const authContext = useContext(AuthContext);
    const [token, setToken] = useState(null);
    useEffect(() => {
        getToken().then((value) => {
            setToken(value)
        });
    }, [authContext]);
    return (
        <NavigationContainer navigationOptions={{ gesturesEnabled: false }}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                }}
            >
                {authContext.signedIn ? (
                    <>
                        <Stack.Screen name="DashBoard" component={DashBoard} />
                        <Stack.Screen name="RideForm" component={PostRide} />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="SplashScreen"
                            component={SplashScreen}
                            options={{ gestureEnabled: false }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ gestureEnabled: false }}
                        />
                        <Stack.Screen
                            name="Signup"
                            component={Signup}
                            options={{ gestureEnabled: false }}
                        />
                        <Stack.Screen
                            name="ChatScreen"
                            component={ChatScreen}
                            options={({ route }) => ({
                                title: route.params.userName,
                                headerBackTitleVisible: false,
                            })}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
