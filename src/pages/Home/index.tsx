import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import api from "../../services/api";
import { useContextApp } from "../../context";
import { Search } from "../../components/Search";

export interface IFilms {
  id?: string;
  title?: string;
  poster_path?: string;
}

export function Home() {

  const { navigate } = useNavigation();
  const [filmes, setFilmes] = useState<IFilms[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  // const [list, setList] = useState(filmes);

  const { favorites } = useContextApp();

  useEffect(() => {
    console.log(favorites)
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "302f40e4989597a8086998d375a42d9d",
          language: "pt-BR",
          page: 1,
        }
      })
      setFilmes(response.data.results.slice(0, 30));
      setLoading(false);
    }
    loadFilmes();
  }, []);

  useEffect(() => {
    if (search === '') {
      filmes;
    } else {
      setFilmes(
        filmes.filter(
          (item) =>
            item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
      );
    }
  }, [search]);

  //FUNÇÕES DOS BOTÕES:
  const handleClickMyFilms = () => {
    navigate("Favorites")
  }
  const handleClickHome = () => {
    navigate("Home")
  }
  const handleClickMovie = (id?: string) => {
    navigate("Movie", { id });
  }

  return (
    <View>
      <Header handleClickMyFilms={handleClickMyFilms} handleClickHome={handleClickHome} />
      <Search value={search} onChange={setSearch}/>
      <FlatList
        style={styles.listaFilmes}
        contentContainerStyle={{
          maxWidth: 800,
          margin: 14,
          paddingBottom: "35%"
        }}
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Image source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
              style={styles.listImg} />
            <TouchableOpacity onPress={() => {
              if(item){
                handleClickMovie(item.id)
              }
            }}>
              <Text style={styles.button}>Acessar</Text>
            </TouchableOpacity>
          </View>
        )}
        />
    </View>

  )
}