import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  listaFilmes:{
    maxWidth: 800,
    margin: 14,
  },
  listKey:{
    width: "100%",
  },
  listTitle:{
    marginBottom: 14,
    textAlign: "center",
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: '900'
  },
  listImg:{
    maxWidth: "100%",
    maxHeight: 200,
    objectFit: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  button:{
    padding: 8,
    textAlign: "center",
    fontSize: 24,
    backgroundColor:THEME.COLORS.PRIMARY,
    color: THEME.COLORS.WHITE,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
})