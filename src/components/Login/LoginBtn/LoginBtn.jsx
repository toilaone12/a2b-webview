import { Text, TouchableHighlight, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Google from 'expo-auth-session/providers/google';
import * as Location from 'expo-location';
import styles from './Style';
import { PermissionsAndroid } from 'react-native';
import { Button } from 'react-native';

const LoginBtn = () => {
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
  
  const androidClientId = '187142393375-7bp1qk9479dibdaepdpj3ibeotm4pr3p.apps.googleusercontent.com';
  const webClientId = '187142393375-c2ai5ek3ap50qat3i710ucc9mirv4j2b.apps.googleusercontent.com';
  const [token,setToken] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [googleResponse, setGoogleResponse] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: androidClientId,
    webClientId: webClientId,
    expoClientId: webClientId
  });

  // Hành động được thực hiện sau khi component được render hoặc state thay đổi
  // Có thể là các hành động bất đồng bộ như gọi API
  // Đảm bảo rằng hành động không gây ra vòng lặp vô hạn
  // Trả về một hàm cleanup (nếu cần) để xử lý khi component unmount hoặc state thay đổi
  useEffect(() => {
    if(latitude === '' && longitude === ''){
      requestLocationService();
    }
    if (googleResponse?.type === 'success') {
      //   // Xử lý thành công
      setToken(googleResponse.authentication.accessToken);
      getUserInfo()
      console.log(1);
    } else {
      // Xử lý không thành công hoặc hủy bỏ
      console.log('Đăng nhập Google không thành công hoặc đã hủy bỏ.');
    }
  },[googleResponse]) //truyen [] de goi useEffect 1 lan sau khi compoment mounted

  const requestLocationService = async () => {
    try { 
      if(Platform.OS == 'android'){
          const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
              title: 'Bật định vị',
              message: 'Chúng tôi có thể bật định vị không?',
              buttonNeutral: 'Hỏi lại sau',
              buttonNegative: 'Hủy',
              buttonPositive: 'Đồng ý',
          })
          if (result === 'granted') {
          } else {
            console.log('You cannot use Geolocation');
            return false;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
      }else if(Platform.OS == 'macos' || Platform.OS == 'ios'){
          console.log("Turn On IOS GPS");
      }
    } catch (error) {
        return false;
    }
  }

  const handleGoogleLogin = async () => {
    // Thực hiện các hành động mong muốn ở đây
    const response = await promptAsync();
    console.log(response);
    setGoogleResponse(response);
    // if (response?.type === 'success') {
    //   // Xử lý thành công
    //   setToken(response.authentication.accessToken);
    //   getUserInfo()
    // } else {
    //   // Xử lý không thành công hoặc hủy bỏ
    //   console.log('Đăng nhập Google không thành công hoặc đã hủy bỏ.');
    // }
  };

  const handleAppleLogin = async () => {
    
  }

  const getUserInfo = async () => {
    try {
        const response = await fetch("https://www.googleapis.com/userinfo/v2/me",
            {
                headers: { Authorization: `Bearer ${token}` },
            });
        const user = await response.json();
        // console.log(user);
        const url = 'https://api.beta-a2b.work/login?email=' + encodeURIComponent(user.email) + '&fullname=' + encodeURIComponent(user.name) + '&picture=' + encodeURIComponent(user.picture);
        const responseUrl = await fetch(url);
        const result = await responseUrl.json();
        if(result.res == 'success'){
          console.log(result.token);
          console.log(latitude);
          console.log(longitude);
            // navigation.navigate('Home', {
            //     paramKey: result.token,
            //     lat: latitude,
            //     lng: longitude
            // })
        }
    } catch (err) {

    }
  }

  return (
    <View style={styles.btnGroup}>
      {btnList.map((item, index) => (
        <TouchableHighlight
          onPress={item.icon === 'google' ? () => handleGoogleLogin() : handleAppleLogin}
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

export default LoginBtn;
