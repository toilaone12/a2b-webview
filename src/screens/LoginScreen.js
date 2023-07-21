import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Login from '../components/Login';
import styles from '../styles';
import { StyleSheet, StatusBar } from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={[styles.flexFull, styles.relative, styles1.container]}>
      <StatusBar
        animated={true}
        barStyle='light-content'
      />
      <Login />
    </SafeAreaView>
  );
};
const styles1 = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000'
  },
  body: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20
  },
  header: {
      fontWeight: "bold",
      color: "#21a3d0",
      fontSize: 30,
      marginBottom: 20
  },
})
export default LoginScreen;
