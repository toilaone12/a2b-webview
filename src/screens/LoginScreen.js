import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import Login from '../components/Login';

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Login />
    </SafeAreaView>
  );
};
// style
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
});
export default LoginScreen;
