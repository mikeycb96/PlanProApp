import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const YourComponent = ({style, item, dayIndex, daysTotal, inCompleteTodo, completeTodo}) => {

    const toggleItem = () => {
        if (item.isCompleted) {
          inCompleteTodo(item.id);
        } else {
          completeTodo(item.id);
        }
      };

    return(
        <View style={item.isCompleted? [styles.completed, style] : [styles.container, style]}>
            <Text>
                {item.title}
            </Text>
            <TouchableOpacity onPressOut={toggleItem}>
                <FontAwesome
                    name={item.isCompleted ? "check-circle-o" : "circle-o"}
                    size={40}
                    style={{ color: "#7A7AF6" }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        borderRadius: 10,
        elevation: 5
    },
    completed: {
        backgroundColor: 'green',
        borderRadius: 10,
        elevation: 5
    }
})

export default YourComponent;