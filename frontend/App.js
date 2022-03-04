import React from "react";
import {
  NativeBaseProvider,
  extendTheme,

} from "native-base";
import { AuthProvider, AuthStateValue } from "./context/AuthContext";
import Routes from './components/Routes';
import Setting from "./components/Setting/Setting";
import Chat from "./components/IndexComponents/Chat";

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
        <Setting/>
        {/* <Chat/> */}
      </AuthProvider>
    </NativeBaseProvider>
  );
}


