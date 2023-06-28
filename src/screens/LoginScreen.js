import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Login from '../components/Login';
import styles from '../styles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={[styles.flexFull, styles.relative]}>
      <Login />
    </SafeAreaView>
  );
};

export default LoginScreen;
