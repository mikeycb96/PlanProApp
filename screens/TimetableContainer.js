import {
    Modal,
    View,
    Button,
    StyleSheet,
    Text,
    FlatList,
    StatusBar,
    Dimensions,
    ScrollView
  } from "react-native";
  import Item from "../components/Item";
  import { useState, useContext, useEffect } from "react";
  import AddTask from "../modals/AddTask";
  import { TaskModalContext } from "../contexts/TaskModalContext";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import "react-native-get-random-values";
  import { v4 as uuidv4 } from "uuid";
  import _values from "lodash";
  import { AppLoading } from "expo";
  import moment from "moment";
  import Timetable from "react-native-calendar-timetable";
  import YourComponent from "../components/YourComponent";

const TimetableContainer = () => {

    const { addTaskModalOpen, setAddTaskModalOpen } =
    useContext(TaskModalContext);

    const [date, setDate] = useState(new Date())
    const [from, setFrom] = useState(moment().subtract(3, 'days').toDate())
    const [till, setTill] = useState(moment().add(3, 'days').toISOString())

    const range = {from, till}

    const [todos, setTodos] = useState([{id: "one", title: "firstTodo", startDate: moment("2023-10-31 08:00", "YYYY-MM-DD HH:mm"), endDate: moment("2023-10-31 11:00", "YYYY-MM-DD HH:mm")}])

    componentDidMount = () => {
        loadTodos();
      };
    
      useEffect(() => {
        loadTodos();
      }, []);
    
    const loadTodos = async() => {
    try{
        const getTodos = await AsyncStorage.getItem("todos")
        const parsedTodos = JSON.parse(getTodos);
        if (parsedTodos) {
            setTodos(parsedTodos);
            } else {
            setTodos([]);
            }
        } catch (e) {
            alert("Cannot load data");
        }
    }

    const saveTodos = async (newTodos) => {
        await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    };
        
    const addTodo = (taskName, start, end) => {
        const ID = uuidv4()
        const newTodoItem = {id: ID, title: taskName, startDate: start, endDate: end}
        const todoToUpdate = [...todos]
        todoToUpdate.push(newTodoItem)
        saveTodos(todoToUpdate)
        setTodos(todoToUpdate)
    } 

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        saveTodos(updatedTodos)
        setTodos(updatedTodos)
    }

    const clearAsyncStorage = async () => {
        try {
          await AsyncStorage.clear();
          setTodos([]);
          console.log("AsyncStorage has been cleared.");
        } catch (error) {
          console.error("Error clearing AsyncStorage:", error);
        }
    }
    
    return(
        <ScrollView>
            <Timetable items={todos} renderItem={props => <YourComponent {...props} deleteTodo={deleteTodo}/>} date={date}/>
            <Modal visible={addTaskModalOpen} animationType="slide">
                <View style={styles.container}>
                <AddTask addTodo={addTodo} />
                <Button
                    style={styles.button}
                    onPress={() => setAddTaskModalOpen(false)}
                    title="close"
                />
                </View>
            </Modal>
                <Button
            style={styles.button}
            onPress={clearAsyncStorage}
            title="Clear All"
        />
        </ScrollView>
    )
}

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

export default TimetableContainer;