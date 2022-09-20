import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import teste from "../../assets/teste.jpg";
import { styles } from "./styles";
export function Movie() {

  const { navigate } = useNavigation();

  const handleClickMyFilms = () => {
    navigate("Details")
  }
  const handleClickHome = () => {
    navigate("Home")
  }

  return (
    <View>
      <Header handleClickMyFilms={handleClickMyFilms} handleClickHome={handleClickHome}/>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Title</Text>
        <Image source={teste} style={styles.imge} />
        <Text style={styles.titleSinopse}>Sinopse</Text>
        <Text style={styles.sinopse}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis nulla ut elit dignissim ultrices. Aliquam tempus tortor eget ex tristique rutrum. Aliquam felis augue, gravida non dolor a, euismod rutrum nibh. Aenean fermentum nec nunc sit amet commodo. Curabitur condimentum ex a libero iaculis aliquam. Donec lobortis dictum purus, at tempor libero. Sed tempus scelerisque leo, nec vehicula quam. Nam id turpis non leo blandit varius </Text>
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