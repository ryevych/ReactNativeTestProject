import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PhotosScreen from "./src/components/photosScreen";
import FavoritesScreen from "./src/components/favoritesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: "#FF00FF",
          },
          // activeColor: "#0000FF",
          // inactiveColor: "#000",
          tabBarIcon: ({ color, size }) => {
            const icon = {
              Photos: "picture-in-picture-bottom-right",
              Favorites: "heart",
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
