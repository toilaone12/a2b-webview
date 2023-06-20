import { View, Text, Image, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import { logo } from '../../assets/images';
import styles from './HomeStyle';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={[styles.wrapper, styles.container]}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.text}>
          Kết nối giữa tài xế và hành khách có cùng cung đường di chuyển, cùng chia sẻ chi phí và
          phi lợi nhuận
        </Text>
        <View style={styles.btnGroup}>
          <View style={[styles.bgRed, styles.flexCenter, styles.w250, styles.h48, styles.border4]}>
            <Icon name="google" style={styles.icon} />
            <Text style={[styles.fs16, styles.lh24, styles.textWhite]}>Đăng nhập qua Google</Text>
          </View>
          <View
            style={[
              styles.bgGray,
              styles.flexCenter,
              styles.w250,
              styles.h48,
              styles.mt20,
              styles.border4,
            ]}
          >
            <Icon name="apple1" style={styles.icon} />
            <Text style={[styles.fs16, styles.lh24, styles.textWhite]}>Đăng nhập qua Apple</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
