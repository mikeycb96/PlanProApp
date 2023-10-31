import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const YourComponent = ({style, item, dayIndex, daysTotal, deleteTodo}) => {
    return(
        <View style={[styles.container, style]}>
            <Text>
                {item.title}
            </Text>
            <Text>
                {dayIndex}of{daysTotal}
            </Text>
            <TouchableOpacity onPressOut={() => deleteTodo(item.id)}>
                <FontAwesome name="trash-o" size={40} style={{ color: "white" }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderRadius: 10,
        elevation: 5
    }
})

export default YourComponent;