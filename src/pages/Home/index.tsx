import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import teste from "../../assets/teste.jpg";
import { styles } from "./styles";

export function Home() {

  const { navigate } = useNavigation();

  const handleClickMyFilms = () => {
    navigate("Favorites")
  }
  const handleClickHome = () => {
    navigate("Home")
  }
  const handleClickMovie = () => {
    navigate("Movie")
  }

  return (
    <View>
      <Header handleClickMyFilms={handleClickMyFilms} handleClickHome={handleClickHome} />
      <View style={styles.listaFilmes}>
        <Text style={styles.listKey} />
        <Text style={styles.listTitle}>Teste</Text>
        <Image source={teste} style={styles.listImg} />
        <TouchableOpacity onPress={() => handleClickMovie()}>
          <Text style={styles.button}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}