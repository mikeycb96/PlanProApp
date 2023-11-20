import { Button, View, TextInput, Form, Input, StyleSheet, Text } from "react-native";
import { useState, useMemo } from "react";
import Item from "../components/Item";
import moment from "moment";
import TimePicker from 'react-native-wheel-time-picker';

const AddTask = ({ addTodo, selectedDate }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const onAddTask = (task, startTime, endTime) => {
    starting = selectedDate + " 08:00"
    ending = selectedDate + " 10:00"
    addTodo(task, moment(JSON.stringify(starting), "YYYY-MM-DD HH:mm"), moment(JSON.stringify(ending), "YYYY-MM-DD HH:mm"));
    setText("");
    alert('Task added')
  };

  const [timeValue, setTimeValue] = useState(Date.now());
  // const [hour, min] = useMemo(() => {
  //   return [
  //     Math.floor(timeValue / MILLISECONDS_PER_HOUR),
  //     Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
  //     Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
  //   ];
  // }, [timeValue]);

  return (
    <View style={styles.container}>
        <TextInput
          value={text}
          placeholder="Enter new task..."
          onChangeText={setText}
        />
        <TimePicker
        value={timeValue}
        wheelProps={{
          wheelHeight: 70,
          itemHeight: 15,
        }}
        onChange={(newValue) => setTimeValue(newValue)}
      />
      <Button
          style={styles.button}
          title="Add Task"
          onPress={() => onAddTask(text)}
        ></Button>
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
  timeValue: {
    marginVertical: 20,
  },
});

export default AddTask;
