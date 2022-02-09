import React from "react";
import {
  NativeBaseProvider,
  extendTheme,

} from "native-base";

import PostRide from "./components/IndexComponents/HomeComponents/PostRide";
import ManageRide from './components/IndexComponents/Rides/ManageRide'
import Routes from './components/Routes'
import { RideContainer } from "./components/IndexComponents/Rides/RideContainer";
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
      <Routes/>
      </NativeBaseProvider>
  );
}


