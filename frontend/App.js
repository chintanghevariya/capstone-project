import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import Login from "./components/login";
import StripeConsent from "./components/payment/stripe-consent";
import { StripeProvider } from "@stripe/stripe-react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <StripeProvider
      publishableKey="pk_test_51JipKvJSijMdla1x0pJ2EjkQpvgsfESI7zbqPwExNQ9nHlGTy2XUXk0kZc2Tq9J6XiYmzGm5umC3U9gP2zetDD6K00TOImtlbb">
      <NativeBaseProvider>
        <StripeConsent />
      </NativeBaseProvider>
    </StripeProvider>
  );
}


