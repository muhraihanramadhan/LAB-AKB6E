import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mencegah splash screen bersembunyi secara otomatis
SplashScreen.preventAutoHideAsync();

interface Student {
  name: string;
  stambuk: string;
  fontFamily: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

const initialStudents: Student[] = [
  // 5 Font Statis (nama 1-5)
  {
    name: "wanomi",
    stambuk: "105841114822",
    fontFamily: "LibertinusSerif-Regular",
  },
  { name: "anomi", stambuk: "105841114922", fontFamily: "BebasNeue-Regular" },
  {
    name: "zulfitra",
    stambuk: "105841115022",
    fontFamily: "LuckiestGuy-Regular",
  },
  { name: "kanomi", stambuk: "105841115122", fontFamily: "BungeeTint-Regular" },
  {
    name: "nur hidayah",
    stambuk: "105841115222",
    fontFamily: "Arbutus-Regular",
  },

  // Nama ke-6 menggunakan font default
  {
    name: "muh raihan Ramadhan",
    stambuk: "105841115322",
    fontFamily: "System",
  },

  // 5 Font Variabel (nama 7-11)
  {
    name: "nur hidayat",
    stambuk: "105841115422",
    fontFamily: "Merienda-Variable",
    fontWeight: "900",
  },
  {
    name: "sitti nurul annisa",
    stambuk: "105841115522",
    fontFamily: "Moazilla-Headline-Variable",
    fontWeight: "600",
  },
  {
    name: "mamoni",
    stambuk: "105841115622",
    fontFamily: "DancingScript-Variable",
    fontWeight: "500",
  },
  {
    name: "hasmaniar",
    stambuk: "105841115722",
    fontFamily: "LexendXetta-Variable",
    fontWeight: "800",
  },
  {
    name: "riski riyanto",
    stambuk: "105841115822",
    fontFamily: "Sixtyfour-Variable",
    fontWeight: "400",
  },
];

export default function IndexScreen() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          // Font Statis (sesuaikan nama file jika berbeda)
          "LibertinusSerif-Regular": require("../../assets/fonts/LibertinusSerif-Regular.ttf"),
          "BebasNeue-Regular": require("../../assets/fonts/BebasNeue-Regular.ttf"),
          "LuckiestGuy-Regular": require("../../assets/fonts/LuckiestGuy-Regular.ttf"),
          "BungeeTint-Regular": require("../../assets/fonts/BungeeTint-Regular.ttf"),
          "Arbutus-Regular": require("../../assets/fonts/Arbutus-Regular.ttf"),

          // Font Variabel (sesuaikan nama file jika berbeda)
          "Merienda-Variable": require("../../assets/fonts/Merienda[wght].ttf"),
          "Moazilla-Headline-Variable": require("../../assets/fonts/Moazilla-Headline-Variable.ttf"), // Asumsi nama file
          "DancingScript-Variable": require("../../assets/fonts/DancingScript[wght].ttf"),
          "LexendXetta-Variable": require("../../assets/fonts/LexendXetta[wght].ttf"),
          "Sixtyfour-Variable": require("../../assets/fonts/Sixtyfour[wght].ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);

  const handleSort = (order: "asc" | "desc") => {
    const sortedStudents = [...students].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return order === "asc" ? -1 : 1;
      if (nameA > nameB) return order === "asc" ? 1 : -1;
      return 0;
    });
    setStudents(sortedStudents);
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Memuat font...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Daftar Mahasiswa & Font</Text>
        <View style={styles.sortButtonContainer}>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => handleSort("asc")}
          >
            <Text style={styles.buttonText}>Urutkan Menaik (A-Z)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => handleSort("desc")}
          >
            <Text style={styles.buttonText}>Urutkan Menurun (Z-A)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {students.map((student, index) => (
            <View key={index} style={styles.studentItem}>
              <Text
                style={[
                  styles.studentName,
                  { fontFamily: student.fontFamily },
                  student.fontWeight ? { fontWeight: student.fontWeight } : {},
                ]}
              >
                {student.name}
              </Text>
              <Text style={styles.stambukText}>Stambuk: {student.stambuk}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sortButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  sortButton: {
    backgroundColor: "#007aff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
  },
  studentItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  studentName: {
    fontSize: 20,
  },
  stambukText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
