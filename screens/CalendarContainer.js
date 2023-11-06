import { View, FlatList, ScrollView, SafeAreaView } from "react-native"
import { useContext, useState, useEffect } from "react";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { TodosContext } from "../contexts/TodosContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Item from "../components/Item";
import { SelectedDateContext } from "../contexts/SelectedDateContext";

const CalendarContainer = () => {

    const {selectedDate, setSelectedDate} = useContext(SelectedDateContext);
    const {todos, setTodos} = useContext(TodosContext)

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

    const inCompleteTodo = (id) => {
      setTodos((prevState) => {
        const newState = {
          ...prevState,
          [id]: {
            ...prevState[id], //locates task by id in prev state
            isCompleted: false,
          },
        };
        saveTodos(newState);
        return { ...newState };
      });
    };
  
    const completeTodo = (id) => {
      setTodos((prevState) => {
        const newState = {
          ...prevState,
          [id]: {
            ...prevState[id],
            isCompleted: true,
          },
        };
        saveTodos(newState);
        return { ...newState };
      });
    };

    return(
        <SafeAreaView style={{flex: 1}}>
          <Calendar
              onDayPress={day => {
              setSelectedDate(day.dateString)}}
              markedDates={{
                  [selectedDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
              }}/>
      
          <FlatList
          data={todos}
          renderItem={(row) => {
            return (
              <Item
                // isCompleted={row.item.isCompleted}
                textValue={row.item.title}
                id={row.item.id}
                deleteTodo={deleteTodo}
                // completeTodo={completeTodo}
                // inCompleteTodo={inCompleteTodo}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
        </SafeAreaView>
    )
}

export default CalendarContainer