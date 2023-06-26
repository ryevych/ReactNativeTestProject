import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PhotosScreen from "./src/components/photosScreen";
import FavoritesScreen from "./src/components/favoritesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: "#FF00FF",
          },
          tabBarIcon: ({ color, size }) => {
            const icon = {
              Photos: "album",
              Favorites: "home",
            };

            return (
              <MaterialCommunityIcons
                name={icon[route.name]}
                color={color}
                size={size}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Photos" component={PhotosScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
