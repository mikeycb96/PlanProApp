import { Modal, View, Button, StyleSheet, Text, FlatList, StatusBar } from "react-native"
import Item from '../components/Item'
import { useState, useContext, useEffect } from "react"
import AddTask from "../modals/AddTask"
import { TaskModalContext } from "../contexts/TaskModalContext"
import AsyncStorage from "@react-native-async-storage/async-storage"
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'
import _values from 'lodash'
import { AppLoading } from 'expo'


const HomepageContainer = () => {

    const {addTaskModalOpen, setAddTaskModalOpen} = useContext(TaskModalContext)

    const [confirmClearAllModalOpen, setConfirmClearAllModalOpen] = useState(false)
    const [ isDataReady, setIsDataReady] = useState(false)
    const [ mockItems, setMockItems] = useState(['First Item', 'Second Item', 'Third Item'])
    const [ todos, setTodos] = useState([])

    componentDidMount = () => {
        loadTodos();
    }

    useEffect(() => {
        loadTodos();
    }, []); 

    const loadTodos = async () =>{
        try{
            const getTodos = await AsyncStorage.getItem('todos')
            const parsedTodos = JSON.parse(getTodos)
            setIsDataReady(true)
            if(parsedTodos){
                setTodos(parsedTodos)
            } else {
                setTodos({})
            }
        } 
        catch(e) {
            alert('Cannot load data')
        }
    }

    const saveTodos = async newTodos => {
        await AsyncStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const addTodo = newTask => {
        const newTodoItem = newTask

        if(newTodoItem !== '') {
            setTodos(prevState => {
                const ID = uuidv4()
                const newTodoObject = {
                    [ID] : {
                        id: ID,
                        isCompleted: false,
                        textValue: newTodoItem,
                        createdAt: Date.now()
                    }
                }
                const newState = {
                    ...prevState,
                [ID]: newTodoObject[ID],
            };
            saveTodos(newState);
            return newState;
            })
        }
        
    }

    const deleteTodo = id => {
        setTodos(prevState => {
            const todos = {...prevState}
            delete todos[id]
            saveTodos(todos)
            return todos
        })
    }

    const inCompleteTodo = id => {
        setTodos(prevState => {
            const newState = {
                ...prevState,
                [id]: {
                    ...prevState[id],
                    isCompleted: false
                }
            };
            saveTodos(newState);
            return { ...newState };
        });
    }
    
    const completeTodo = id => {
        setTodos(prevState => {
            const newState = {
                ...prevState,
                [id]: {
                    ...prevState[id],
                    isCompleted: true
                }
            };
            saveTodos(newState);
            return { ...newState };
        });
    }

    const clearAsyncStorage = async () => {
        try {
          await AsyncStorage.clear();
          setTodos({})
          console.log("AsyncStorage has been cleared.");
        } catch (error) {
          console.error("Error clearing AsyncStorage:", error);
        }
      };

    return(
        <View>
            <FlatList data={Object.values(todos)} renderItem={row => {
                return <Item
                    isCompleted={row.item.isCompleted}
                    textValue={row.item.textValue}
                    id={row.item.id}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                    inCompleteTodo={inCompleteTodo}
                />
            }}
            keyExtractor={item => item.id}/>
            <Modal visible={addTaskModalOpen} animationType="slide">
                <View style={styles.container}>
                    <AddTask addTodo={addTodo}/>
                    <Button style={styles.button} onPress={() => setAddTaskModalOpen(false)} title="close"/> 
                </View> 
            </Modal>
            <Button style={styles.button} onPress={() => setConfirmClearAllModalOpen(true)} title="Clear All"/> 
            <Modal visible={confirmClearAllModalOpen} animationType="slide">
                <View style={styles.container}>
                    <Text>Are you sure? </Text>
                    <Button style={styles.button} onPress={() => {
                        clearAsyncStorage()
                        setConfirmClearAllModalOpen(false)}} title="Yes"/> 
                    <Button style={styles.button} onPress={() => setConfirmClearAllModalOpen(false)} title="No"/> 
                </View> 
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 20
    },
  });

export default HomepageContainer