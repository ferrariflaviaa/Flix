import { View, Text, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from "../../components/Header";
import { useEffect, useState } from 'react';
import api from "../../services/api"
import { styles } from "./styles";
import { IFilms } from "../Home";
import { IFavorites, useContextApp } from "../../context";

interface IFilm extends IFilms {
  overview?: string;
  backdrop_path?: string;
}
interface IFilmParms {
  id: string;
}

export function Movie() {
  const route = useRoute();
  const { id } = route.params as IFilmParms;
  const { navigate } = useNavigation();
  const [film, setFilm] = useState<IFilm>({});
  const [loading, setLoading] = useState(true);
  const { favorites, setFavorites } = useContextApp();

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
          "FILME NÃO ENCOTRANDO"
          navigate("Home");
          return;
        })
    }
    loadFilme();

    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [navigate, id]);

  async function SalvarFilme(item: IFilm) {

    const buscarFilme = favorites.find((busca) => busca.id === item.id);

    if (buscarFilme) return Alert.alert(
      "Ocorreu um erro inesperado!",
      "Este filme já esta em sua lista de favoritos."
    );

    const novoFilme = {
      id: item.id,
      title: item.title
    } as IFilms;

    const novoVetorFilmes = [...favorites, novoFilme] as IFavorites[];

    await AsyncStorage.setItem("@storage_films", JSON.stringify(novoVetorFilmes));
    setFavorites(novoVetorFilmes);
    return Alert.alert(
      "Parabéns!",
      "Seu filme foi salvo em sua lista de favoritos."
    )
  }

  const handleClickMyFilms = () => {
    navigate("Favorites");
  }
  const handleClickHome = () => {
    navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Header handleClickMyFilms={handleClickMyFilms} handleClickHome={handleClickHome} />
      <ScrollView contentContainerStyle={{ paddingVertical: '6%' }} style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{film?.title}</Text>
        {film.backdrop_path === "" ? (
          <View style={styles.containerLoad}>
            <ActivityIndicator size="large"  color="#000"/>
          </View>
        ) : (
          <Image source={{ uri: `https://image.tmdb.org/t/p/original/${film?.backdrop_path}` }} style={styles.imge} />
        )
        }
        <Text style={styles.titleSinopse}>Sinopse</Text>
        <Text style={styles.sinopse}>{film?.overview}</Text>
        <Text style={styles.avaliacao}>Avaliação</Text>
        <View style={styles.acao}>
          <TouchableOpacity onPress={() => SalvarFilme(film)}>
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