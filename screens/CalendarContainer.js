import { View, StyleSheet, Button, FlatList, ScrollView, SafeAreaView, Text, Modal } from "react-native"
import { useContext, useState, useEffect } from "react";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { TodosContext } from "../contexts/TodosContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Item from "../components/Item";
import { SelectedDateContext } from "../contexts/SelectedDateContext";
import { TaskModalContext } from "../contexts/TaskModalContext";
import AddTask from "../modals/AddTask";
import { v4 as uuidv4 } from "uuid";
import _values from "lodash";

const CalendarContainer = () => {

    const {selectedDate, setSelectedDate} = useContext(SelectedDateContext);
    const {todos, setTodos} = useContext(TodosContext)
    const { addTaskModalOpen, setAddTaskModalOpen } = useContext(TaskModalContext);


    componentDidMount = () => {
      loadTodos();
    };
  
    useEffect(() => {
      loadTodos();
    }, [selectedDate]);
  
    const loadTodos = async() => {
      try{
          const getTodos = await AsyncStorage.getItem(selectedDate)
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
        await AsyncStorage.setItem(selectedDate, JSON.stringify(newTodos));
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

export default CalendarContainer