import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Persegi Panjang sebagai Bingkai */}
      <View style={styles.rectangle}>
        <Image
          source={{
            uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115322_.jpg?17518711436",
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Pill dengan Icon dan Angka */}
      <View style={styles.pill}>
        <Ionicons
          name="happy-outline"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.pillText}>105841115322</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  rectangle: {
    width: 300,
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15, // ➜ memberi ruang agar gambar tidak mentok ke tepi
    borderWidth: 2,
    borderColor: "#ccc", // warna bingkai luar
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // untuk efek bayangan di Android
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#f0f0f0", // latar belakang dalam gambar
    borderWidth: 1,
    borderColor: "#999", // bingkai di sekeliling gambar
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "yellow",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pillText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  icon: {
    alignSelf: "center",
  },
});
