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
import ManageRide from "./IndexComponents/Rides/ManageRide";
import Wallet from "./payment/wallet";
import AddCard from "./payment/AddCard";
import { StripeProvider } from "@stripe/stripe-react-native";
import StripeConsent from "./payment/stripe-consent";
import AddToWallet from "./payment/AddToWallet";
import RideDetails from "./RideDetailComponents/RideDetails";
import AllRides from "./IndexComponents/SearchComponent/AllRides";

const Stack = createNativeStackNavigator();

export default function Routes() {
    const authContext = useContext(AuthContext);
  const [token, setToken] = useState(null);
  useEffect(() => {
    getToken().then((value) => {
        setToken(value)
        if (value && value.trim() !== "") {
            // authContext.signInUser()
        }
    });
  }, []);
  return (
      <StripeProvider publishableKey="pk_test_51JipKvJSijMdla1x0pJ2EjkQpvgsfESI7zbqPwExNQ9nHlGTy2XUXk0kZc2Tq9J6XiYmzGm5umC3U9gP2zetDD6K00TOImtlbb">
          <NavigationContainer navigationOptions={{ gesturesEnabled: false }}>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: authContext.isSignedIn,
                  }}
              >
                  {authContext.signedIn ? (
                      <>
                          <Stack.Screen
                              name="DashBoard"
                              component={DashBoard}
                              options={{ headerShown: false }}
                          />
                          <Stack.Screen
                              name="ManageRide"
                              component={ManageRide}
                          />
                          <Stack.Screen
                              name="StripeConsent"
                              component={StripeConsent}
                          />
                          <Stack.Screen
                              name="RideDetail"
                              component={RideDetails}
                          />
                          <Stack.Screen name="RideForm" component={PostRide} />
                          <Stack.Screen name="Wallet" component={Wallet} />
                          <Stack.Screen name="AddCard" component={AddCard} />
                          <Stack.Screen
                              name="AddToWallet"
                              component={AddToWallet}
                          />
                          <Stack.Screen name="AllRides" component={AllRides} />
                          <Stack.Screen
                              name="ChatScreen"
                              component={ChatScreen}
                              options={({ route }) => ({
                                  title: route.params.userName,
                                  headerBackTitleVisible: false,
                              })}
                          />
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
                      </>
                  )}
              </Stack.Navigator>
          </NavigationContainer>
      </StripeProvider>
  );
}
