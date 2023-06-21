import { Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Style';

const HomeBtn = () => {
  const btnList = [
    {
      icon: 'google',
      text: 'Đăng nhập qua Google',
      styleView: [styles.bgRed, styles.flexCenter, styles.w250, styles.h48, styles.border4],
    },
    {
      icon: 'apple',
      text: 'Đăng nhập qua Apple',
      styleView: [styles.bgGray, styles.flexCenter, styles.w250, styles.h48, styles.border4],
    },
  ];

  const handleButtonClick = () => {
    // Thực hiện các hành động mong muốn ở đây
  };

  return (
    <View style={styles.btnGroup}>
      {btnList.map((item, index) => (
        <TouchableHighlight
          onPress={handleButtonClick}
          style={index > 0 ? [item.styleView, { marginTop: 20 }] : item.styleView}
          key={index}
        >
          <>
            <Icon name={item.icon} style={styles.icon} />
            <Text style={[styles.fs16, styles.lh24, styles.textWhite]}>{item.text}</Text>
          </>
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default HomeBtn;
