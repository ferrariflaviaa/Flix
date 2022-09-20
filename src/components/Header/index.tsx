import { View, Image, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

interface IHeaderProps {
  handleClickMyFilms: () => void;
  handleClickHome: () => void;
}

export function Header({ handleClickMyFilms, handleClickHome }: IHeaderProps) {

  return (
    <View style={styles.header}>
      <Text style={styles.logo} onPress={() => handleClickHome()}>Flix</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleClickMyFilms()}>
        <Text style={styles.buttonText}>Meus Filmes</Text>
      </TouchableOpacity>
    </View>
  )
}