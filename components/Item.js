import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { NativeBaseProvider, Icon } from 'native-base';



const { width } = Dimensions.get("window");

const Item = ({
  inCompleteTodo,
  completeTodo,
  textValue,
  id,
  deleteTodo,
  isCompleted,
}) => {

  const toggleItem = () => {
    if (isCompleted) {
      inCompleteTodo(id)
    } else {
      completeTodo(id)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={toggleItem}>
          {/* <NativeBaseProvider>
            <Icon 
            name = {isCompleted ? 'checkmark-circle' : 'radio-button-off'}
            />
          </NativeBaseProvider> */}
        </TouchableOpacity>

        <Text
          style={styles.text}
        >
          {textValue}
        </Text>
      </View>
      <TouchableOpacity onPressOut={() => deleteTodo(id)}>
        {/* <NativeBaseProvider>
          <Icon name = "md-trash"/>
        </NativeBaseProvider> */}
      </TouchableOpacity>
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
    fontSize: 18,
    marginVertical: 20,
    paddingLeft: 10,
  },
});

export default Item;
