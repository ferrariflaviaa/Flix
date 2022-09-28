import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { useContextApp } from "../../context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Favorites() {

  const { navigate} = useNavigation();
  const { favorites, setFavorites } = useContextApp();

  const handleClickMyFilms = () => {
    navigate("Favorites")
  }
  const handleClickHome = () => {
    navigate("Home")
  }
  const handleClickMovie = (id: string) => {
    navigate("Movie", {id})
  }
  
  const handleDeleteMovie = (id: string) => {
    Alert.alert(
      "Excluir filme dos favoritos",
      "Você deseja excluir o filme de sua lista?",
      [
        {
          text: "Sim",
          onPress: async() => {
            const buscarFilme = favorites.find((busca) => busca.id === id );
            if(buscarFilme){
              const filterFilms = favorites.filter((busca) => busca.id !== id);
              await AsyncStorage.setItem("@storage_films", JSON.stringify(filterFilms));
              setFavorites(filterFilms);
            }
          }
        },
        {
          text: "Não",
          style: "cancel"
        }
      ]
    )
    
  }

  return (
    <View>
      <Header handleClickHome={handleClickHome} handleClickMyFilms={handleClickMyFilms} />
      <View style={styles.container}>
        <Text style={styles.title}>Meus Filmes</Text>
        <FlatList
          data={favorites}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <View style={styles.firstItem}>
                <Text>{item.title}</Text>
              </View>
              <TouchableOpacity onPress={() => handleClickMovie(item.id)}>
                <Text>Detalhes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteMovie(item.id)}>
                <Text>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  )
}