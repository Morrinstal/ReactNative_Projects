import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  FlatList, 
  TextInput, 
  StyleSheet, 
  Text, 
  Pressable 
} from "react-native";
import MovieCard from './components/MovieCard';
import { useState } from 'react';

type MovieType = {
  title: string,
  year: string,
  image: string
}
const movies:Array<MovieType> = [
  {
    title:"Interstellar", 
    year:"2014", 
    image:"http://fc04.deviantart.net/fs71/f/2014/045/a/2/interstellar_by_visuasys-d6ibj30.jpg"
  },
  {
    title:"Titanic", 
    year:"1997", 
    image:"https://upload.wikimedia.org/wikipedia/ru/1/19/Titanic_%28Official_Film_Poster%29.png"
  }
];

export default function App() {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [movieList, setMovieList] = useState<MovieType[]>(movies);

  const addMovie = () => {
    if (title.trim() && year.trim() && image.trim()) {
      const newMovie: MovieType = {title, year, image};
      setMovieList([...movieList, newMovie]);
      setTitle(""); 
      setYear("");
      setImage("");
    }
  };
  
  const handleYearChange = (text: string) => {
    if (/^\d*$/.test(text)) {
      setYear(text);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data = {movieList}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => <MovieCard {...item}/>}
      />

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Название фильма"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
        />
        
        <TextInput 
          style={styles.input}
          placeholder="Год выпуска"
          placeholderTextColor="#aaa"
          value={year}
          onChangeText={handleYearChange}
          keyboardType="numeric"
        />
        
        <TextInput 
          style={styles.input}
          placeholder="URL картинки"
          placeholderTextColor="#aaa"
          value={image}
          onChangeText={setImage}
        />
        
        <Pressable style={styles.button} onPress={addMovie}>
          <Text style={styles.buttonText}>Добавить фильм</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" hidden={true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#1e1e1e",
    justifyContent: 'flex-start', 
  },
  formContainer: {
    marginTop: 20, 
    marginBottom: 30,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: "#444",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff6f00",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ff6f00",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});


