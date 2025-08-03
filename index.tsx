import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

// Import 10 keluarga ikon yang berbeda
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Foundation from "@expo/vector-icons/Foundation";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

// Tipe untuk data ikon
interface IconData {
  family:
    | "Ionicons"
    | "FontAwesome"
    | "MaterialIcons"
    | "AntDesign"
    | "Entypo"
    | "EvilIcons"
    | "Feather"
    | "Foundation"
    | "Octicons"
    | "SimpleLineIcons";
  name: string;
  size: number;
  color: string;
  borderColor: string;
}

// Data untuk 10 ikon dengan keluarga, nama, dan warna border yang berbeda
const iconData: IconData[] = [
  {
    family: "Ionicons",
    name: "logo-react",
    size: 50,
    color: "#007aff",
    borderColor: "#4caf50",
  },
  {
    family: "FontAwesome",
    name: "github",
    size: 50,
    color: "#333",
    borderColor: "#f44336",
  },
  {
    family: "MaterialIcons",
    name: "camera",
    size: 50,
    color: "#f50",
    borderColor: "#ffeb3b",
  },
  {
    family: "AntDesign",
    name: "apple-o",
    size: 50,
    color: "#a1a1a1",
    borderColor: "#2196f3",
  },
  {
    family: "Entypo",
    name: "beamed-note",
    size: 50,
    color: "#6a0dad",
    borderColor: "#9c27b0",
  },
  {
    family: "EvilIcons",
    name: "bell",
    size: 50,
    color: "#d81b60",
    borderColor: "#ff5722",
  },
  {
    family: "Feather",
    name: "mail",
    size: 50,
    color: "#00bfa5",
    borderColor: "#00bcd4",
  },
  {
    family: "Foundation",
    name: "home",
    size: 50,
    color: "#8d6e63",
    borderColor: "#795548",
  },
  {
    family: "Octicons",
    name: "bug",
    size: 50,
    color: "#2b2b2b",
    borderColor: "#cddc39",
  },
  {
    family: "SimpleLineIcons",
    name: "screen-tablet",
    size: 50,
    color: "#ff6f00",
    borderColor: "#607d8b",
  },
];

// Komponen untuk setiap ikon
const IconItem: React.FC<{ data: IconData }> = ({ data }) => {
  let IconComponent;
  switch (data.family) {
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "FontAwesome":
      IconComponent = FontAwesome;
      break;
    case "MaterialIcons":
      IconComponent = MaterialIcons;
      break;
    case "AntDesign":
      IconComponent = AntDesign;
      break;
    case "Entypo":
      IconComponent = Entypo;
      break;
    case "EvilIcons":
      IconComponent = EvilIcons;
      break;
    case "Feather":
      IconComponent = Feather;
      break;
    case "Foundation":
      IconComponent = Foundation;
      break;
    case "Octicons":
      IconComponent = Octicons;
      break;
    case "SimpleLineIcons":
      IconComponent = SimpleLineIcons;
      break;
    default:
      IconComponent = Ionicons; // Default jika tidak ada yang cocok
  }

  return (
    <View style={[styles.iconContainer, { borderColor: data.borderColor }]}>
      <IconComponent
        name={data.name as any}
        size={data.size}
        color={data.color}
      />
    </View>
  );
};

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>10 Ikon dari Keluarga Berbeda</Text>
        <View style={styles.iconWrapper}>
          {iconData.map((icon, index) => (
            <IconItem key={index} data={icon} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  iconWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderRadius: 15,
  },
});
