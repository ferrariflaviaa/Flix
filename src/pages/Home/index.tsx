import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import teste from "../../assets/teste.jpg";
import { styles } from "./styles";

export function Home() {

  const { navigate } = useNavigation();

  const handleClickMyFilms = () => {
    navigate("Details")
  }

  return (
    <View>
      <Header handleClickMyFilms={handleClickMyFilms} />
      <View style={styles.listaFilmes}>
        <Text style={styles.listKey} />
        <Text style={styles.listTitle}>Teste</Text>
        <Image source={teste} style={styles.listImg} />
        <TouchableOpacity onPress={() => handleClickMyFilms()}>
          <Text style={styles.button}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}