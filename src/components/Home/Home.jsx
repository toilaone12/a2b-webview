import React from 'react';
import { View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import HomeBtn from './HomeBtn';
import HomeRules from './HomeRules';

import styles from './HomeStyle';
import { logo } from '../../assets/images';

const Home = () => {
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
      <HomeBtn />

      {/* rules */}
      <HomeRules />
    </View>
  );
};

export default Home;
