import React from 'react';
import {View,StyleSheet,Text} from 'react-native'

export default function ErrorScreen() {
  
      return(
        <View style={Styles.container}>
            <Text>Page not found</Text>
        </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
