import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import Login from "./components/login";


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
      <Login/>
    </NativeBaseProvider>
    </>
  );
}


