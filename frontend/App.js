import React from "react";
import {
  NativeBaseProvider,
  extendTheme,

} from "native-base";

import { AuthProvider, AuthStateValue } from "./context/AuthContext";

import Routes from './components/Routes'
import PostRide from "./components/IndexComponents/HomeComponents/PostRide";
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
          <AuthProvider>
              {/* <Routes /> */}
              <PostRide/>
          </AuthProvider>
      </NativeBaseProvider>
  );
}


