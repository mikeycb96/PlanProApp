import { Button, View, TextInput, Form, Input, StyleSheet } from "react-native";
import { useState } from "react";
import Item from "../components/Item";
import moment from "moment";

const AddTask = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onAddTask = (task) => {
    addTodo(task, moment("2023-10-31 08:00", "YYYY-MM-DD HH:mm"), moment("2023-10-31 10:00", "YYYY-MM-DD HH:mm"));
    setText("");
    // alert('Task added')
  };

  return (
    <View>
      <View>
        <TextInput
          value={text}
          placeholder="Enter new task..."
          onChangeText={setText}
        />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Add Task"
          onPress={() => onAddTask(text)}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 20,
  },
});

export default AddTask;
