import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'relative',
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
});
export default styles;
