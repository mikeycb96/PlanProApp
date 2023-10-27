import { Modal, View, Button, StyleSheet, Text, FlatList, StatusBar } from "react-native"
import Item from '../components/Item'
import { useState, useContext } from "react"
import AddTask from "../modals/AddTask"
import { TaskModalContext } from "../contexts/TaskModalContext"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { v4 as uuidv4 } from 'uuid'
import _values from 'lodash'
import { AppLoading } from 'expo'


const HomepageContainer = () => {

    const {addTaskModalOpen, setAddTaskModalOpen} = useContext(TaskModalContext)
    
    const [ isDataReady, setIsDataReady] = useState(false)
    const [ mockItems, setMockItems] = useState(['First Item', 'Second Item', 'Third Item'])
    const [ todos, setTodos] = useState({})

    const componentDidMount = () => {
        loadTodos();
    }

    const loadTodos = async () =>{
        try{
            const getTodos = await AsyncStorage.getItem('todos')
            const parsedTodos = JSON.parse(getTodos)
            setIsDataReady(true)
            if(parsedTodos){
                setTodos({})
            } else {
                setTodos(parsedTodos)
            }
        } 
        catch(e) {
            alert('Cannot load data')
        }
    }

    const saveTodos = newTodos => {
        const saveTodos = AsyncStorage.setItem('todos', JSON.stringify(newTodos))
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
                    todos: {
                        ...prevState.todos,
                        ...newTodoObject
                    }
                }
                saveTodos(newState.todos)
                return { ...newState}
            })
        }
        
    }

    const deleteTodo = id => {
        setTodos(prevState => {
            const todos = prevState.todos
            delete todos[id]
            const newState = {
                ...prevState,
                ...todos
            }
            saveTodos(newState.todos)
            return {...newState}
        })
    }

    

    return(
        <View>
            <FlatList data={mockItems} renderItem={row => {
                return <Item text={row.item}/>
            }}
            keyExtractor={item => item.id}/>
            <Modal visible={addTaskModalOpen} animationType="slide">
                <View style={styles.container}>
                    <AddTask/>
                    <Button style={styles.button} onPress={() => setAddTaskModalOpen(false)} title="close"/> 
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
        
    },
  });

export default HomepageContainer