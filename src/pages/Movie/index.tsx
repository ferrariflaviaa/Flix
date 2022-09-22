import { View, Text, Image, TouchableOpacity, ScrollView, Alert, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
// import 
import { Header } from "../../components/Header";
import { useEffect, useState } from 'react';
import api from "../../services/api"
import { styles } from "./styles";
import { IFilms } from "../Home";

interface IFilm  extends IFilms{
  overview: string;
  backdrop_path: string;
  
}

export function Movie() {
  const route = useRoute();
  const id = route.params;
  const { navigate } = useNavigation();
  const [film, setFilm] = useState<IFilm>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "302f40e4989597a8086998d375a42d9d",
          language: "pt-BR",
        }
      })
        .then((response) => {
          setFilm(response.data);
          setLoading(false);
          console.log(response.data)
        })
        .catch(() => {
          //"FILME NÃO ENCOTRANDO"
          navigate("Home");
          return;
        })
    }
    loadFilme();

    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [navigate, id]);

  function SalvarFilme() {
    if (hasfilme) {
      return Alert.alert("Ocorreu um errro inesperado!", "Este filme já esta em sua lista de favoritos");
    }
    return Alert.alert("Filme salvo", "Seu filme foi salvo com sucesso!");
  }

  const handleClickMyFilms = () => {
    navigate("Favorites")
  }
  const handleClickHome = () => {
    navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Header handleClickMyFilms={handleClickMyFilms} handleClickHome={handleClickHome} />
      <ScrollView contentContainerStyle={{paddingVertical: '6%'}} style={styles.content} showsVerticalScrollIndicator={false}>
''
        <Text style={styles.title}>{film?.title}</Text>
        <Image source={{uri: `https://image.tmdb.org/t/p/original/${film?.backdrop_path}`}} style={styles.imge} />
        <Text style={styles.titleSinopse}>Sinopse</Text>
        <Text style={styles.sinopse}>{film?.overview}</Text>
        <Text style={styles.avaliacao}>Avaliação</Text>
        <View style={styles.acao}>
          <TouchableOpacity>
            <Text style={styles.button}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Treiler</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}