import { View, Text, FlatList, StyleSheet } from "react-native";
import ItemComponent from "./itemComponent";

export default function PhotosScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  return (
    <View>
      <Text>Photos Screen</Text>
      <FlatList
        data={DATA}
        // horizontal={true}
        ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
        numColumns={2}
        renderItem={({ item }) => <ItemComponent item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemText: {
    padding: 15,
    margin: 10,
    marginBottom: 0,
    borderColor: "black",
    borderWidth: 1,
  },
});
