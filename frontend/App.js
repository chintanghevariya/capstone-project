import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import Login from "./components/login";
import StripeConsent from "./components/payment/stripe-consent";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <>
    <NativeBaseProvider>
      <StripeConsent />
    </NativeBaseProvider>
    </>
  );
}


