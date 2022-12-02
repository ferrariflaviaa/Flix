import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

export const Search = () => {
  return(
  <View style={styles.container}>
    <TextInput placeholder="Pesquisa seu filme"/>
  </View>
  
  );
}