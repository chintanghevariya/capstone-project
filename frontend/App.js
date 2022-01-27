import React from "react";
import {
  NativeBaseProvider,
  extendTheme,

} from "native-base";
import View from'react-native'
import Login from './components/Login'
import Routes from './components/Routes'
import Signup from "./components/Signup";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
      <NativeBaseProvider>
        <Routes/>
      </NativeBaseProvider>
  );
}


