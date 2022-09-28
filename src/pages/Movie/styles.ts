import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
    marginVertical: 0,
    marginTop: 18,
    display: "flex",
    maxWidth: 800,
    paddingHorizontal: 8,
  },

  title: {
    fontSize: THEME.FONT_SIZE.GG,
    fontWeight: "800",
    marginVertical: 14,
    marginHorizontal: 0,
  },
  imge: {
    borderRadius: 8,
    width: 800,
    maxWidth: "100%",
    height: 340,
  },
  containerLoad:{
    backgroundColor: 'black',
    width: 800,
    height: 340,
  },
  titleSinopse: {
    marginVertical: 14,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "500",
  },
  sinopse:{
    textAlign: "justify",
    fontSize: THEME.FONT_SIZE.MD,
  },
  avaliacao:{
    fontSize: THEME.FONT_SIZE.MD,
  },
  acao:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-around",

  },
  button: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    fontSize: THEME.FONT_SIZE.MD,
    paddingHorizontal: 35,
    paddingVertical: 25,
    borderRadius: 15,
    color: THEME.COLORS.TEXT,
  },
})