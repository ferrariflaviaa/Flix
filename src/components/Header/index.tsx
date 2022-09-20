import { View, Image, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

interface IHeaderProps{
  handleClickMyFilms: () => void;
}

export function Header({ handleClickMyFilms }: IHeaderProps) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Flix</Text>
        <TouchableOpacity style={styles.button} onPress={()=>handleClickMyFilms()}>
          <Text style={styles.buttonText}>Meus Filmes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}