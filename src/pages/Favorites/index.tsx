import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export function Favorites() {

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
  

  const data = [
    { id: 1, titulo: "Teste" },
    { id: 2, titulo: "Teste 2" },
    { id: 3, titulo: "Teste 3" },
  ]

  return (
    <View>
      <Header handleClickHome={handleClickHome} handleClickMyFilms={handleClickMyFilms} />
      <View style={styles.container}>
        <Text style={styles.title}>Meus Filmes</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={(item) => (
            <View style={styles.list}>
              <Text>item.titulo00000000000000</Text>
              <TouchableOpacity onPress={() => handleClickMovie()}>
                <Text>Detalhes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClickMovie()}>
                <Text>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  )
}