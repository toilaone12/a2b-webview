import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  logo: {
    width: 227,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: 22,
    lineHeight: 32,
    color: 'white',
    textAlign: 'center',
    paddingTop: 50,
  },
  icon: {
    color: '#fff',
    fontSize: 28,
    marginRight: 10,
  },
  flexCenter: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgRed: {
    backgroundColor: '#E8424A',
  },
  bgGray: {
    backgroundColor: '#5F5F5F',
  },
  w250: {
    width: 250,
  },
  h48: {
    height: 48,
  },
  fs16: {
    fontSize: 16,
  },
  lh24: {
    lineHeight: 24,
  },
  textWhite: {
    color: '#fff',
  },
  border4: {
    borderRadius: 4,
  },
  mt20: {
    marginTop: 20,
  },
  btnGroup: {
    marginTop: 60,
  },
});
export default styles;
