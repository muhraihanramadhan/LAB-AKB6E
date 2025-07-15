import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

// Ambil lebar layar untuk hitung ukuran sel grid
const screenWidth = Dimensions.get("window").width;
const numColumns = 3; // 3 kolom untuk grid 3x3
const cellPadding = 6;
const cellSize = (screenWidth - cellPadding * 2 * numColumns) / numColumns;

// Buat 9 pasang gambar utama & alternatif dari picsum.photos
const imagePairs = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  main: { uri: `https://picsum.photos/id/${100 + i}/200/200` },
  alt: { uri: `https://picsum.photos/id/${200 + i}/200/200` },
}));

export default function ImageGrid() {
  // Animated.Value untuk skala masing-masing gambar
  const scaleRefs = useRef(
    imagePairs.map(() => new Animated.Value(0.8)) // Awal skala 0.8
  ).current;

  // Simpan status gambar utama/alternatif (tanpa trigger re-render)
  const imageStates = useRef(imagePairs.map(() => ({ isAlt: false }))).current;

  // Saat gambar ditekan
  const handlePress = (index: number) => {
    // Toggle gambar utama <-> alternatif
    imageStates[index].isAlt = !imageStates[index].isAlt;

    // Hitung skala baru, maksimal 2x
    const currentValue = scaleRefs[index]._value;
    const newScale = Math.min(currentValue + 0.2, 2);

    // Animasikan perubahan skala
    Animated.spring(scaleRefs[index], {
      toValue: newScale,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {/* Render 9 gambar dalam grid */}
        {imagePairs.map((img, index) => {
          const source = imageStates[index].isAlt ? img.alt : img.main;
          return (
            <TouchableOpacity
              key={img.id}
              onPress={() => handlePress(index)}
              activeOpacity={0.8}
              style={styles.cell}
            >
              <Animated.Image
                source={source}
                style={[
                  styles.image,
                  {
                    transform: [{ scale: scaleRefs[index] }],
                  },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: screenWidth,
    justifyContent: "center",
  },
  cell: {
    width: cellSize,
    height: cellSize,
    margin: cellPadding,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
