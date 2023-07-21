import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import WebView from 'react-native-webview';
import registerNNPushToken, { deleteIndieNotificationInbox, getIndieNotificationInbox, registerIndieID } from 'native-notify';
import * as Notifications from 'expo-notifications';


const HomeScreen = ({route}) => {
  
  const latValue = route.params.lat;
  const lngValue = route.params.lng;
  const cookieValue = route.params.token;
  const [path, setPath] = useState('');
  const [link, setLink] = useState("https://book.beta-a2b.work");
  const setLocation = `
    window.localStorage.setItem("gps_lat", "${latValue}");
    window.localStorage.setItem("gps_lng", "${lngValue}");
    true;
  `;
  registerNNPushToken(9501, 'glwUk4dIw0MJGzd8x1ZKOy');
  registerIndieID(cookieValue, 9501, 'glwUk4dIw0MJGzd8x1ZKOy');  
  useEffect(() => {
    if(path !== ''){
      setLink("https://book.beta-a2b.work"+path);
    }

    const notiResponse = Notifications.addNotificationResponseReceivedListener((response) => {
      // Lấy thông tin trong response và chuyển hướng đến trang trong Webview hoặc thực hiện các xử lý khác
      const path = response.notification.request.content.data.path;
      setPath(path);
    })

    return () => {
      // Hủy đăng ký sự kiện khi component bị hủy
      notiResponse.remove();
    };
  },[path])

  return (
    <View style={[styles1.container]}>
      <StatusBar
        animated={true}
        barStyle='light-content'
      />
      <WebView source={{uri: link, method: "POST", body: `token=${cookieValue}&lat=${latValue}&lng=${lngValue}`, headers: {'Cookie': `token=${cookieValue}`,'Content-Type': 'application/x-www-form-urlencoded'}}}
      userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Chrome/58.0.3029.110 Safari/537.3"
      originWhitelist={["https://*", "http://*", "file://*", "sms://*"]}
      injectedJavaScript={setLocation}
      javaScriptEnabled={true}
      style={{marginTop: 50, marginBottom: 30, backgroundColor : '#000'}}
      ></WebView>
    </View>
  )
  // return <View style={[styles.flexFull, styles.bgBlack]}></View>;
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
export default HomeScreen;
