import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexCenter: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /*-------------------------------------------------------------------------- */
  flexFull: {
    flex: 1,
  },
  wFull: {
    width: '100%',
  },
  hFull: {
    height: '100%',
  },

  /*-------------------------------------------------------------------------- */
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },

  /*-------------------------------------------------------------------------- */
  t0: {
    top: 0,
  },
  l0: {
    left: 0,
  },
  r0: {
    right: 0,
  },
  b0: {
    bottom: 0,
  },
  inset0: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  /*-------------------------------------------------------------------------- */
  w250: {
    width: 250,
  },
  h48: {
    height: 48,
  },

  /*-------------------------------------------------------------------------- */
  cover: {
    resizeMode: 'cover',
  },
  contain: {
    resizeMode: 'contain',
  },

  /*-------------------------------------------------------------------------- */
  bgBlack: {
    backgroundColor: '#000',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  bg161e: {
    backgroundColor: '#161E28',
  },
  bgRed: {
    backgroundColor: '#E8424A',
  },
  bgGray: {
    backgroundColor: '#5F5F5F',
  },
  /*-------------------------------------------------------------------------- */
  textWhite: {
    color: 'white',
  },
  textGray77: {
    color: 'rgba(119,125,146,0.8)',
  },
  textCenter: {
    textAlign: 'center',
  },

  /*-------------------------------------------------------------------------- */
  itemsCenter: {
    alignItems: 'center',
  },
  itemsLeft: {
    alignItems: 'left',
  },
  itemsRight: {
    alignItems: 'right',
  },

  /*-------------------------------------------------------------------------- */
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },

  /*-------------------------------------------------------------------------- */
  fs11: {
    fontSize: 11,
  },
  fs12: {
    fontSize: 12,
  },
  fs16: {
    fontSize: 16,
  },
  fs22: {
    fontSize: 22,
  },
  fs24: {
    fontSize: 24,
  },
  fs28: {
    fontSize: 28,
  },

  /*-------------------------------------------------------------------------- */
  p10: {
    padding: 10,
  },
  px10: {
    paddingHorizontal: 10,
  },
  py10: {
    paddingVertical: 10,
  },
  pt10: {
    paddingTop: 10,
  },
  pb10: {
    paddingBottom: 10,
  },
  pl10: {
    paddingLeft: 10,
  },
  pr10: {
    paddingRight: 10,
  },

  m10: {
    margin: 10,
  },
  mx10: {
    marginHorizontal: 10,
  },
  my10: {
    marginVertical: 10,
  },
  mt10: {
    marginTop: 10,
  },
  mb10: {
    marginBottom: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  mr10: {
    marginRight: 10,
  },

  /*-------------------------------------------------------------------------- */
  p15: {
    padding: 15,
  },
  px15: {
    paddingHorizontal: 15,
  },
  py15: {
    paddingVertical: 15,
  },
  pt15: {
    paddingTop: 15,
  },
  pb15: {
    paddingBottom: 15,
  },
  pl15: {
    paddingLeft: 15,
  },
  pr15: {
    paddingRight: 15,
  },

  m15: {
    margin: 15,
  },
  mx15: {
    marginHorizontal: 15,
  },
  my15: {
    marginVertical: 15,
  },
  mt15: {
    marginTop: 15,
  },
  mb15: {
    marginBottom: 15,
  },
  ml15: {
    marginLeft: 15,
  },
  mr15: {
    marginRight: 15,
  },
  /*-------------------------------------------------------------------------- */
  p20: {
    padding: 20,
  },
  px20: {
    paddingHorizontal: 20,
  },
  py20: {
    paddingVertical: 20,
  },
  pt20: {
    paddingTop: 20,
  },
  pb20: {
    paddingBottom: 20,
  },
  pl20: {
    paddingLeft: 20,
  },
  pr20: {
    paddingRight: 20,
  },

  m20: {
    margin: 20,
  },
  mx20: {
    marginHorizontal: 20,
  },
  my20: {
    marginVertical: 20,
  },
  mt20: {
    marginTop: 20,
  },
  mb20: {
    marginBottom: 20,
  },
  ml20: {
    marginLeft: 20,
  },
  mr20: {
    marginRight: 20,
  },
  /*-------------------------------------------------------------------------- */
  p24: {
    padding: 24,
  },
  px24: {
    paddingHorizontal: 24,
  },
  py24: {
    paddingVertical: 24,
  },
  pt24: {
    paddingTop: 24,
  },
  pb24: {
    paddingBottom: 24,
  },
  pl24: {
    paddingLeft: 24,
  },
  pr24: {
    paddingRight: 24,
  },

  m24: {
    margin: 24,
  },
  mx24: {
    marginHorizontal: 24,
  },
  my24: {
    marginVertical: 24,
  },
  mt24: {
    marginTop: 24,
  },
  mb24: {
    marginBottom: 24,
  },
  ml24: {
    marginLeft: 24,
  },
  mr24: {
    marginRight: 24,
  },
  /*-------------------------------------------------------------------------- */
  p50: {
    padding: 50,
  },
  px50: {
    paddingHorizontal: 50,
  },
  py50: {
    paddingVertical: 50,
  },
  pt50: {
    paddingTop: 50,
  },
  pb50: {
    paddingBottom: 50,
  },
  pl50: {
    paddingLeft: 50,
  },
  pr50: {
    paddingRight: 50,
  },

  m50: {
    margin: 50,
  },
  mx50: {
    marginHorizontal: 50,
  },
  my50: {
    marginVertical: 50,
  },
  mt50: {
    marginTop: 50,
  },
  mb50: {
    marginBottom: 50,
  },
  ml50: {
    marginLeft: 50,
  },
  mr50: {
    marginRight: 50,
  },
  /*-------------------------------------------------------------------------- */
  p60: {
    padding: 60,
  },
  px60: {
    paddingHorizontal: 60,
  },
  py60: {
    paddingVertical: 60,
  },
  pt60: {
    paddingTop: 60,
  },
  pb60: {
    paddingBottom: 60,
  },
  pl60: {
    paddingLeft: 60,
  },
  pr60: {
    paddingRight: 60,
  },

  m60: {
    margin: 60,
  },
  mx60: {
    marginHorizontal: 60,
  },
  my60: {
    marginVertical: 60,
  },
  mt60: {
    marginTop: 60,
  },
  mb60: {
    marginBottom: 60,
  },
  ml60: {
    marginLeft: 60,
  },
  mr60: {
    marginRight: 60,
  },
  /*-------------------------------------------------------------------------- */
  lh20: {
    lineHeight: 20,
  },
  lh22: {
    lineHeight: 22,
  },
  lh24: {
    lineHeight: 24,
  },
  lh32: {
    lineHeight: 32,
  },

  /*-------------------------------------------------------------------------- */
  border4: {
    borderRadius: 4,
  },

  /*-------------------------------------------------------------------------- */
  logoPrimary: {
    width: 227,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  rulesBefore: {
    backgroundColor: '#777D92',
    width: 1,
    height: 15,
    marginHorizontal: 12,
  },
});
export default styles;
