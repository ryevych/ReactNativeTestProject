import { View, Image, Text } from "react-native";

export default ItemComponent = function(item){
    return (
        <View>
            <Image source={item.thumbnailUrl}/>
            <Image source={item.iconlUrl}/>
            <Text>{item.title}</Text>
        </View>
    )
}