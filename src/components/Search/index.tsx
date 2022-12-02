import React, { Dispatch, SetStateAction } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";
interface ISearch {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  
}
export const Search = ({value, onChange}: ISearch) => {
  return(
  <View style={styles.container}>
    <TextInput placeholder="Pesquisa seu filme" value={value} onChangeText={onChange}/>
  </View>
  
  );
}