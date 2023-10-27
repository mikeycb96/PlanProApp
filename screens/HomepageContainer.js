import { Modal, View, Button, StyleSheet, Text } from "react-native"
import { useState, useContext } from "react"
import AddTask from "../modals/AddTask";
import { TaskModalContext } from "../contexts/TaskModalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomepageContainer = () => {

    const {addTaskModalOpen, setAddTaskModalOpen} = useContext(TaskModalContext)
    const [data, setData] = useState("")

    const STORAGE_KEY = "27/10/2023"

    const add = async (taskName) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, taskName)
        }
        catch (e){
            console.error(e)
        }
    }

    const get = async () => {
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY)
            if(value !== null) {
                setData(value)
            }
        } 
        catch (e){
            console.error(e)
        }
    }

    const removeEverything = async () =>{
        try{
          await AsyncStorage.clear();
          setData(null)
          alert('Storage successfully cleared!');
        } catch (e) {
          alert('Failed to clear the async storage.')
        }
      }

    return(
        <View>
            <Text>{data}</Text>
            <Button title={"get data"} onPress={get}/>
            <Button title={"clear data"} onPress={removeEverything}/>
            <Modal visible={addTaskModalOpen} animationType="slide">
                <View style={styles.container}>
                    <AddTask add={add}/>
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

export default HomepageContainer;