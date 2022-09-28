import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container:{
    marginTop: 24,
  },
  title:{
    marginBottom: 14,
    fontSize: THEME.FONT_SIZE.GG,
    fontWeight: "800", 
    textAlign: 'center',
  },
  listItem:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10  
},
  firstItem:{
    width: "50%"
  }
})