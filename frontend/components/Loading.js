// import React, { Component } from "react";
// import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// class Loading extends Component {
//   render() {
//     return (
//       <View style={[styles.container, styles.horizontal]}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   horizontal: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10
//   }
// });

// export default Loading;
import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, Modal} from 'react-native';
import {StyleSheet} from 'react-native';

const Loading = ({loading}) => (
  <Modal transparent={true} animationType={'none'} visible={loading}>
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator color="#000" animating={loading} />
      </View>
    </View>
  </Modal>
);

Loading.propTypes = {
  loading: PropTypes.bool,
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#808080',
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;