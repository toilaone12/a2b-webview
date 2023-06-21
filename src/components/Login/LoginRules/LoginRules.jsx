import { View, Text } from 'react-native';
import React, { useState } from 'react';

import styles from './Style';

const LoginRules = () => {
  const data = ['A2B', 'Liên hệ', 'Điều khoản', 'Từ chối trách nhiệm'];

  const [hiddenIndexes, setHiddenIndexes] = useState([0]);
  return (
    <View style={[styles.flexCenter, styles.rules]}>
      {data.map((rule, index) => (
        <View style={styles.rulesItem} key={index}>
          {!hiddenIndexes.includes(index) && <View style={styles.rulesBefore} />}
          <Text style={styles.rulesText}>{rule}</Text>
        </View>
      ))}
    </View>
  );
};

export default LoginRules;
