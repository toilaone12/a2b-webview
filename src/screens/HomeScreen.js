import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import Home from '../components/Home';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Home />
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
export default HomeScreen;
