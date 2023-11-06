import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const Item = ({
  // inCompleteTodo,
  // completeTodo,
  textValue,
  id,
  deleteTodo,
  // isCompleted,
}) => {
  const toggleItem = () => {
    if (isCompleted) {
      inCompleteTodo(id);
    } else {
      completeTodo(id);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{textValue}</Text>
      </View>
      <TouchableOpacity onPressOut={() => deleteTodo(id)}>
        <FontAwesome name="trash-o" size={40} style={{ color: "red" }} />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={toggleItem}>
        <FontAwesome
          name={isCompleted ? "check-circle-o" : "circle-o"}
          size={40}
          style={{ marginRight: 15, color: "#7A7AF6" }}
        />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#5859f2",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
    width: width / 2,
    alignItems: "center",
  },
  text: {
    color: "#4F50DC",
    fontSize: 25,
    marginVertical: 20,
    paddingLeft: 10,
  },
});

export default Item;
