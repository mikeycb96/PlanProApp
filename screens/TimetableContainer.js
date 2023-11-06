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
  import { useState, useContext, useEffect, useRef } from "react";
  import AddTask from "../modals/AddTask";
  import { TaskModalContext } from "../contexts/TaskModalContext";
  import { TodosContext } from "../contexts/TodosContext";
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

    const [todaysTodos, setTodaysTodos] = useState([])
    const { todos, setTodos } = useContext(TodosContext)

    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    componentDidMount = () => {
        loadTodos();
      };
    
      useEffect(() => {
        loadTodos();
      }, [todos]);
    
    const loadTodos = async() => {
    try{
        const getTodos = await AsyncStorage.getItem(formattedDate)
        const parsedTodos = JSON.parse(getTodos);
        if (parsedTodos) {
            setTodaysTodos(parsedTodos);
            } else {
            setTodaysTodos([]);
            }
        } catch (e) {
            alert("Cannot load data");
        }
    }

    const saveTodos = async (newTodos) => {
        await AsyncStorage.setItem(formattedDate, JSON.stringify(newTodos));
    };

    // const clearAsyncStorage = async () => {
    //     try {
    //       await AsyncStorage.clear();
    //       setTodos([]);
    //       console.log("AsyncStorage has been cleared.");
    //     } catch (error) {
    //       console.error("Error clearing AsyncStorage:", error);
    //     }
    // }

    const inCompleteTodo = (id) => {
      const inComplete = { isCompleted: false }
      const updatedTodos = todaysTodos.map(todo =>{
          if(todo.id === id){
            return { ...todo, ...inComplete}
          }
          return todo;
        })
      saveTodos(updatedTodos) //save to AsyncStorage
      setTodaysTodos(updatedTodos) //save to viewing storage
    };
  
    const completeTodo = (id) => {
      const inComplete = { isCompleted: true }
      const updatedTodos = todaysTodos.map(todo =>{
          if(todo.id === id){
            return { ...todo, ...inComplete}
          }
          return todo;
        })
      saveTodos(updatedTodos)
      setTodaysTodos(updatedTodos)
    };
    
    return(
        <ScrollView>
            <Timetable items={todaysTodos} renderItem={props => <YourComponent {...props} inCompleteTodo={inCompleteTodo} completeTodo={completeTodo}/>} date={date}/>
                {/* <Button
            style={styles.button}
            onPress={clearAsyncStorage}
            title="Clear All"
        /> */}
        </ScrollView>
    )
}

export default TimetableContainer;