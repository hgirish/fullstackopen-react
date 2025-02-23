import {  Text, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: Platform.select({
      ios: 'blue',
      android: 'green',
      default: 'black', // web
    }),
    padding: 10,
    margin: 10,
    fontSize: 20,
  }
});

const WhatIsMyPlatform = () => {
  return <Text style={styles.text}>Your platform is: {Platform.OS}</Text>;
};
export default WhatIsMyPlatform