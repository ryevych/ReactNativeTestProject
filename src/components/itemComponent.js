import { View, Image, Text, StyleSheet } from "react-native";

export default ItemComponent = function ({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.thumbnailUrl} />
      <Image source={item.iconlUrl} />
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#333",
    // marginLeft: "2.5%",
    // marginRight: "2.5%",
    width: "50%",
    // flex: 1,
  },
});
