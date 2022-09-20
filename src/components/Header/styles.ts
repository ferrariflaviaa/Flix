import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 30,
    paddingHorizontal: "10%",
    // marginTop:27,
  },
  logo: {
    textDecoration: "none",
    fontSize: THEME.FONT_SIZE.LG,
    cursor: "pointer",
    color: THEME.COLORS.TEXT,
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 40,
  },
  buttonText: {
    color: THEME.COLORS.BACKGROUND_900,
  }
})