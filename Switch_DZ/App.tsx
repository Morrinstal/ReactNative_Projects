import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import styles from "./styles/style";

type BookType = {
  id: number,
  title: string,
  description: string,
  imageUrl: string
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const books: Array<BookType> = [
    {
      id: 1,
      title: "1984",
      description: "A dystopian novel by George Orwell about totalitarian surveillance and control.",
      imageUrl: "https://medien.umbreitkatalog.de/bildzentrale_original/978/373/061/1678.jpg"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      description: "Harper Lee's classic novel about racial injustice in the American South.",
      imageUrl: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
    },
    {
      id: 3,
      title: "The Great Gatsby",
      description: "F. Scott Fitzgerald's novel about the American Dream and the Roaring Twenties.",
      imageUrl: "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg"
    },
    {
      id: 4,
      title: "Moby-Dick",
      description: "Herman Melville's epic tale of obsession and revenge on the high seas.",
      imageUrl: "https://m.media-amazon.com/images/I/610qaD5PskL.jpg"
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      description: "Jane Austen's timeless romance novel exploring themes of love and class.",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg"
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      description: "J.D. Salinger's novel about teenage angst and alienation.",
      imageUrl: "https://i.ebayimg.com/images/g/u88AAOSweNta3w7T/s-l1200.jpg"
    },
    {
      id: 7,
      title: "Brave New World",
      description: "Aldous Huxley's dystopian novel about a future society driven by consumerism and control.",
      imageUrl: "https://m.media-amazon.com/images/I/81fiJzvcB2L._UF1000,1000_QL80_.jpg"
    },
    {
      id: 8,
      title: "The Lord of the Rings",
      description: "J.R.R. Tolkien's legendary fantasy epic about the struggle between good and evil.",
      imageUrl: "https://m.media-amazon.com/images/I/81j4C6j3dRL.jpg"
    }
  ];
  

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: isDarkMode ? "#fff" : "#000" }]}>
          Library
        </Text>
        <View style={styles.switchContainer}>
          <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>Switch Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDarkMode ? "#444" : "#f8f8f8" }]}>
            <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text style={[styles.cardTitle, { color: isDarkMode ? "#fff" : "#000" }]}>
                {item.title}
              </Text>
              <Text style={[styles.cardDescription, { color: isDarkMode ? "#ccc" : "#666" }]} numberOfLines={3}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text>List is empty!</Text>}
        contentContainerStyle={styles.cardWrapper}
      />
      <StatusBar hidden={false}/>
    </SafeAreaView>
  );
};

export default App;
