import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  flexCenter: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rules: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  rulesItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rulesBefore: {
    backgroundColor: '#777D92',
    width: 1,
    height: 15,
    marginHorizontal: 12,
  },
  rulesText: {
    color: '#777D92',
    fontSize: 11,
  },
});
export default styles;
