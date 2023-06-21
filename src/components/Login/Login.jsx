import React from 'react';
import { View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import styles from './LoginStyle';
import { logo } from '../../assets/images';
import LoginRules from './LoginRules';
import LoginBtn from './LoginBtn';

const Login = () => {
  return (
    <View style={[styles.wrapper, styles.container]}>
      {/* logo */}
      <ResponsiveImage source={logo} style={styles.logo} resizeMode="stretch" />

      {/* text */}
      <Text style={styles.text}>
        Kết nối giữa tài xế và hành khách có cùng cung đường di chuyển, cùng chia sẻ chi phí và phi
        lợi nhuận
      </Text>

      {/* btn group */}
      <LoginBtn />

      {/* rules */}
      <LoginRules />
    </View>
  );
};

export default Login;
